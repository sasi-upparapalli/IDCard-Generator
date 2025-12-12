import React, { useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'

export default function IdCardPage(){
  const idCardRef = useRef(null)
  const downloadBtnRef = useRef(null)

  useEffect(() => {
    const idCardData = JSON.parse(localStorage.getItem('idCardData'))
    const downloadButton = downloadBtnRef.current
    const idCardElement = idCardRef.current

    if (idCardData && idCardElement) {
      const setText = (id, value) => {
        const el = document.getElementById(id)
        if (el) el.innerText = value
      }

      setText('studentName', idCardData.name)
      setText('studentBranch', idCardData.branch)
      setText('studentRoll', idCardData.roll)
      setText('studentAdhar', idCardData.Adhar)
      document.querySelectorAll('#studentMnumber').forEach(el => el.innerText = idCardData.mnumber)
      setText('studentBirthday', idCardData.birthday)
      setText('studentBlood', idCardData.blood)
      setText('studentAddress', idCardData.address)
      setText('studentYear', idCardData.year)

      const studentPhoto = document.getElementById('studentPhoto')
      if (studentPhoto) {
        studentPhoto.src = idCardData.photo

        studentPhoto.onload = () => {
          if (downloadButton) {
            downloadButton.style.display = 'block'
            downloadButton.disabled = false

            downloadButton.addEventListener('click', function () {
              html2canvas(idCardElement, {
                useCORS: true,
                onclone: (documentClone) => {
                  const clonePhoto = documentClone.getElementById('studentPhoto')
                  if (clonePhoto) clonePhoto.src = studentPhoto.src
                }
              }).then(canvas => {
                const imageData = canvas.toDataURL('image/png')
                const link = document.createElement('a')
                link.href = imageData
                const filename = `ID_Card_${idCardData.roll}.png`
                link.download = filename
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }).catch(err => {
                console.error("Error generating ID card image:", err)
                alert("Could not download ID card. See console for details.")
              })
            })
          }
        }

        studentPhoto.onerror = () => {
          console.error("Student photo failed to load.")
          alert("Error: The student photo could not be loaded.")
          if (downloadButton) downloadButton.style.display = 'none'
        }
      }

    } else {
      if (downloadBtnRef.current) downloadBtnRef.current.style.display = 'none'
      if (idCardRef.current) idCardRef.current.innerHTML = '<h1>No ID Card Data Found.</h1>'
    }

  }, [])

  return (
    <div className="id-wrapper">
      <div className="idcard" id="idCardToDownload" ref={idCardRef}>
        <img src={process.env.PUBLIC_URL + '/idcard.png'} className="id-background" alt="ID Card Template" />

        <p className="year"><span id="studentYear"></span></p>
        <img id="studentPhoto" src="" alt="User Photo" />
        <p className="blood"><span id="studentBlood"></span></p>
        <p className="name" id="studentName"></p>
        <p className="mnumber"><span className="label">📞:</span><span id="studentMnumber"></span></p>
        <p className="branch"><span id="studentBranch"></span></p>
        <p className="roll"><span id="studentRoll"></span></p>
        <p className="birthday"><span className="label">D.O.B:</span> <span id="studentBirthday"></span></p>
        <p className="Adhar"><span className="label">Adhar No:</span> <span id="studentAdhar"></span></p>
        <p className="address"><span className="label">Address:</span> <span id="studentAddress"></span></p>
        <p className="mnumber"><span className="label">📞:</span><span id="studentMnumber"></span></p>
      </div>

      <button id="downloadBtn" ref={downloadBtnRef} style={{display: 'none'}}>Download ID Card</button>
    </div>
  )
}
