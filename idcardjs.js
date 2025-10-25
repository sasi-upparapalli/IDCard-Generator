function generateID() {
  const name = document.getElementById('name').value;
  const branch = document.getElementById('branch').value;
  const roll = document.getElementById('roll').value;
  const Adhar = document.getElementById('Adhar').value;
  const mnumber = document.getElementById('mnumber').value;
  const birthday = document.getElementById('birthday').value;
  const blood = document.getElementById('blood').value;
  const address = document.getElementById('address').value;
  const year = parseInt(document.getElementById('year').value);
  const photo = document.getElementById('photo').files[0];

  if (name && branch && roll && Adhar && birthday && blood && address && year && photo && mnumber) {
    const endYear = year + 4;
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();

      img.onload = function () {
        const canvas = document.createElement('canvas');
        const maxWidth = 200;
        const maxHeight = 250;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round(height * (maxWidth / width));
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round(width * (maxHeight / height));
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const resizedPhotoURL = canvas.toDataURL('image/jpeg', 0.8);

        const idCardData = {
          name: name,
          branch: branch,
          roll: roll,
          Adhar: Adhar,
          mnumber: mnumber,
          birthday: birthday,
          blood: blood,
          address: address,
          year: `${year}-${endYear}`,
          photo: resizedPhotoURL
        };

        localStorage.setItem('idCardData', JSON.stringify(idCardData));
        window.open('idcard.html');
      };

      img.src = e.target.result;
    };

    reader.readAsDataURL(photo);
  } else {
    alert('Please fill in all the details and upload a photo.');
  }
}

window.onload = function () {
  const idCardData = JSON.parse(localStorage.getItem('idCardData'));
  const downloadButton = document.getElementById('downloadBtn');
  const idCardElement = document.getElementById('idCardToDownload');

  if (idCardData && idCardElement) {
    document.getElementById('studentName').innerText = idCardData.name;
    document.getElementById('studentBranch').innerText = idCardData.branch;
    document.getElementById('studentRoll').innerText = idCardData.roll;
    document.getElementById('studentAdhar').innerText = idCardData.Adhar;
    document.querySelectorAll('#studentMnumber').forEach(el => el.innerText = idCardData.mnumber);
    document.getElementById('studentBirthday').innerText = idCardData.birthday;
    document.getElementById('studentBlood').innerText = idCardData.blood;
    document.getElementById('studentAddress').innerText = idCardData.address;
    document.getElementById('studentYear').innerText = idCardData.year;

    const studentPhoto = document.getElementById('studentPhoto');
    studentPhoto.src = idCardData.photo;

    studentPhoto.onload = () => {
      downloadButton.style.display = 'block';
      downloadButton.disabled = false;

      downloadButton.addEventListener('click', function () {
        html2canvas(idCardElement, {
          useCORS: true,
          onclone: (document) => {
            document.getElementById('studentPhoto').src = studentPhoto.src;
          }
        }).then(canvas => {
          const imageData = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = imageData;
          const filename = `ID_Card_${idCardData.roll}.png`;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }).catch(err => {
          console.error("Error generating ID card image:", err);
          alert("Could not download ID card. See console for details.");
        });
      });
    };

    studentPhoto.onerror = () => {
      console.error("Student photo failed to load.");
      alert("Error: The student photo could not be loaded.");
      downloadButton.style.display = 'none';
    }

  } else {
    if (downloadButton) downloadButton.style.display = 'none';
    if (idCardElement) idCardElement.innerHTML = "<h1>No ID Card Data Found.</h1>";
  }
};
