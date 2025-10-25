# Student ID Card Creator 🎓  

Welcome to the **Raghu Engineering College Student ID Card Creator** — a simple yet powerful tool to design personalized student identity cards with ease.

## Contents 📚  
- [Introduction](#introduction-🎯)
- [Information Needed](#information-needed-📝)
- [Key Highlights](#key-highlights-✨)
- [Download ID Card as Image](#download-id-card-as-image-📸)
- [Technology Stack](#technology-stack-🛠️)
- [Preview](#preview-🖼️)
- [Useful Links](#useful-links-📌)

## Introduction 🎯  

The **Student ID Card Creator** offers a quick way to craft professional student ID cards by entering key details such as name, birth date, department, and more — all generated in real time.

## Information Needed 📝  

To build your digital ID card, please provide the following:

- **Full Name**: Type your complete name. (SURNAME YOUR NAME)  
- **Date of Birth**: SELECT YOUR DOB  
- **Blood Group**: Select your blood group.  
- **Roll Number**: Type your assigned roll number.  
- **Branch**: Select Your department (e.g., Data science-CSD).  
- **Year of Admission**: The year you joined the institution.  
- **Email Address**: Enter Your valid email address.  
- **Residential Address**: Enter your address (Door Number, Street/Village name, City name, District, State).  
- **Profile Photo**: Upload a personal image to appear on your ID. (Upload Your passport size photo).  

## Key Highlights ✨  

- ✅ **User-Friendly Form** – Easy-to-use interface for entering student details.  
- 🖼️ **Image Upload** – Allows uploading a photo for the card.  
- 🎓 **Auto Batch Detection** – Calculates and displays the academic batch (e.g., 2022–26) based on joining year.  
- ⚡ **Instant ID Generation** – Dynamically creates an ID card once details are submitted.  
- 📸 **Reliable Image Download** – Download a pixel-perfect PNG of your ID card.  

## Download ID Card as Image 📸

This project includes a high-reliability feature to download the generated ID card as a high-quality PNG file.

### Implementation

To bypass common HTML-to-image rendering bugs (like font overlapping and layout shifts), this project does not use `html2canvas`.  

Instead, it uses the native HTML `<canvas>` API for a pixel-perfect result.  

**Workflow:**

1. **Data Transfer**: The `form.html` page saves all user data (including the user's photo as a dataURL) to `localStorage`.  
2. **Canvas Drawing**: When `idcard.html` loads, `idcardjs.js` retrieves the data and:  
   - Waits for all assets (the `idcard.png` background and the required web fonts) to load.  
   - Manually draws the background image onto the `<canvas>` element.  
   - Draws the user's photo on top at the exact coordinates.  
   - Draws each piece of text (name, roll number, etc.) in its specific font, size, color, and pixel-perfect position.  
3. **Reliable Download**: Once the canvas is fully drawn, the "Download ID Card" button appears. Clicking it converts the canvas content into a PNG and triggers the download.  

This method guarantees a **100% accurate, pixel-perfect copy** of the generated card, with no alignment or font errors.

## Technology Stack 🛠️  

- 💻 **HTML** – For building the structure of the application.  
- 🎨 **CSS** – Used to apply styles and design the interface.  
- ⚙️ **JavaScript** – Manages data input and card creation dynamically.  
- 🖌️ **HTML Canvas** – Used for drawing the ID card pixel-perfectly to ensure a reliable image download.  

## Preview 🖼️  

Here’s a sneak peek at the application in action:

### Desktop View:
![Desktop Preview](https://github.com/sasi-upparapalli/IDCard-Generator/blob/12359763cffaeab5b77cfa758202e56ade6bfd8b/Extra/desk1.png)

### Demo:
![Demo](https://github.com/sasi-upparapalli/IDCard-Generator/blob/a1adc0f515835119258c78ead216de1659a203fc/Extra/demo.gif)

## Useful Links 📌  

- 🌐 **Live App**: [Open Website](https://sasi-upparapalli.github.io/IDCard-Generator/)  
- 💻 **Source Code**: [View on GitHub](https://github.com/sasi-upparapalli/IDCard-Generator.git)  
- 🤝 **Connect with Me**: [LinkedIn Profile](https://www.linkedin.com/in/doondi)

---

Feel free to explore, enhance, or share the **Student ID Card Creator** with classmates, faculty, or institutions who could benefit from an easy and elegant ID card solution.
