import React from 'react'

export default function FormPage(){
  const generateID = (ev) => {
    ev.preventDefault()

    const name = document.getElementById('name').value
    const branch = document.getElementById('branch').value
    const roll = document.getElementById('roll').value
    const Adhar = document.getElementById('Adhar').value
    const mnumber = document.getElementById('mnumber').value
    const birthday = document.getElementById('birthday').value
    const blood = document.getElementById('blood').value
    const address = document.getElementById('address').value
    const yearVal = document.getElementById('year').value
    const year = parseInt(yearVal)
    const photoInput = document.getElementById('photo')
    const photo = photoInput.files[0]

    if (name && branch && roll && Adhar && birthday && blood && address && year && photo && mnumber) {
      const endYear = year + 4
      const reader = new FileReader()

      reader.onload = function (e) {
        const img = new Image()

        img.onload = function () {
          const canvas = document.createElement('canvas')
          const maxWidth = 200
          const maxHeight = 250
          let width = img.width
          let height = img.height

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round(height * (maxWidth / width))
              width = maxWidth
            }
          } else {
            if (height > maxHeight) {
              width = Math.round(width * (maxHeight / height))
              height = maxHeight
            }
          }

          canvas.width = width
          canvas.height = height

          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)

          const resizedPhotoURL = canvas.toDataURL('image/jpeg', 0.8)

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
          }

          localStorage.setItem('idCardData', JSON.stringify(idCardData))

          // Open the idcard page in a new tab (keeps same behavior)
          const basePath = window.location.origin + window.location.pathname.replace(/\/$/, ''); 
const url = `${basePath}#/idcard`;
window.open(url, '_blank');
        }

        img.src = e.target.result
      }

      reader.readAsDataURL(photo)
    } else {
      alert('Please fill in all the details and upload a photo.')
    }
  }

  return (
    <div>
      <div className="instructions"> <h2>INSTRUCTIONS:</h2>
        <ul>
          <li><strong>Full Name:</strong> Type your complete name.(SURNAME YOUR NAME )</li>
          <li><strong>Date of Birth:</strong> SELECT YOUR DOB</li>
          <li><strong>Blood Group:</strong> Select your blood group.</li>
          <li><strong>Roll Number:</strong> Type your assigned roll number.</li>
          <li><strong>Branch:</strong> Select Your department (e.g., Data science-CSD).</li>
          <li><strong>Year of Admission:</strong> The year you joined the institution.</li>
          <li><strong>Email Address:</strong> Enter Your valid email address.</li>
          <li><strong>Residential Address:</strong> Enter your address (Door Number,Streat/Village name,City name,District,State.)</li>
          <li><strong>Profile Photo:</strong> Upload a personal image to appear on your ID.(Uplode Your passport size photo).</li>
        </ul>
      </div>

      <div className="card">
        <form onSubmit={generateID}>
          <table className="table" align="center" border="5" borderColor="black">
            <tbody>
              <tr>
                <td><label htmlFor="name">STUDENT NAME:</label></td>
                <td><input type="text" id="name" name="name" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="roll">STUDENT ROLL NUMBER:</label></td>
                <td><input type="text" id="roll" name="roll" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="branch">STUDENT BRANCH:</label></td>
                <td>
                  <select id="branch" name="branch" required>
                    <option value="">Select</option>
                    <option value="CSE">CSE</option>
                    <option value="CSM">CSM</option>
                    <option value="CSD">CSD</option>
                    <option value="CSC">CSC</option>
                    <option value="ECE">ECE</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="year">ACADEMIC YEAR (Start):</label></td>
                <td><input type="number" id="year" name="year" placeholder="e.g. 2023" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="birthday">STUDENT D.O.B:</label></td>
                <td><input type="date" id="birthday" name="birthday" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="Adhar">STUDENT ADHAR NUMBER:</label></td>
                <td><input type="number" id="Adhar" name="Adhar" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="blood">STUDENT BLOOD GROUP:</label></td>
                <td>
                  <select id="blood" name="blood" required>
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="O-">O-</option>
                    <option value="AB-">AB-</option>
                    <option value="AB+">AB+</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="address">ADDRESS:</label></td>
                <td><input type="text" id="address" name="address" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="mnumber">STUDENT MOBILE NUMBER:</label></td>
                <td><input type="number" id="mnumber" name="mnumber" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="photo">STUDENT PHOTO:</label></td>
                <td><input type="file" id="photo" name="photo" accept="image/jpeg, image/png, image/gif" required /></td>
              </tr>
              <tr>
                <td colSpan="2" style={{textAlign: 'center'}}><button type="submit">Submit</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}
