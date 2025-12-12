# Student ID Card Creator (React) 🎓

A modern and responsive **React-based application** for generating professional student ID cards with real-time preview and downloadable high‑quality images.

This project is built entirely using **React**, with all design, styling, and layout preserved exactly as intended — ensuring a pixel‑perfect ID card output.

---

## Contents 📚
- [Introduction](#introduction-🎯)
- [Information Needed](#information-needed-📝)
- [React Features](#react-features-⚛️)
- [Key Highlights](#key-highlights-✨)
- [Download ID Card as Image](#download-id-card-as-image-📸)
- [Technology Stack](#technology-stack-🛠️)
- [Preview](#preview-🖼️)
- [Useful Links](#useful-links-📌)

---

## Introduction 🎯

The **Student ID Card Creator (React)** allows students to generate their own digital ID cards by entering details such as name, date of birth, branch, address, and more.  
Once submitted, the app instantly displays a professional ID card that can be downloaded as a high‑quality image.

This version is built fully with **React**, offering better performance, maintainability, and smoother user interaction.

---

## Information Needed 📝

To generate the ID card, the user must provide:

- **Full Name** (SURNAME YOUR NAME)  
- **Date of Birth**  
- **Blood Group**  
- **Roll Number**  
- **Branch / Department**  
- **Year of Admission**  
- **Email Address**  
- **Residential Address**  
- **Profile Photo** (Passport-size image)

---

## React Features ⚛️

### 🔹 Component-Based Architecture
- Separate **Form** and **ID Card** pages for clean maintainable code.

### 🔹 React Router (HashRouter)
- Ensures smooth page navigation on GitHub Pages.
- Prevents 404 errors on refresh or new tab (`#/idcard` routing).

### 🔹 LocalStorage Data Transport
- After form submission, all user inputs + photo are saved in localStorage.
- The ID Card page reads and renders the stored data reliably.

### 🔹 Fully Responsive UI
- Layout and styling preserved exactly as intended, scaled appropriately across devices.

---

## Key Highlights ✨

- 🧾 **Clean & Easy Form Input**  
- 📸 **Photo Upload Support**  
- 🎓 **Auto Batch Calculation** (e.g., 2023–2027)  
- ⚡ **Instant ID Card Generation**  
- 🎨 **Pixel‑Perfect Layout** — positions, fonts, and styles exactly matched  
- 🔽 **Reliable PNG Download**  

---

## Download ID Card as Image 📸

This app uses **html2canvas** to capture the rendered ID card and download it as a PNG.

**Process:**
1. User submits the form  
2. Data is stored in `localStorage`  
3. ID Card page loads automatically  
4. Once rendered, a **Download** button becomes available  
5. Clicking it downloads a **pixel‑perfect PNG** of the ID card  

---

## Technology Stack 🛠️

- ⚛️ **React**  
- 🛣️ **React Router DOM**  
- 🎨 **CSS**  
- 🧠 **JavaScript (ES6+)**  
- 🖼️ **html2canvas**  
- 🌐 **GitHub Pages** (Deployment)  

---

## Preview 🖼️

### Desktop View:
![Desktop Preview](https://github.com/sasi-upparapalli/IDCard-Generator/blob/12359763cffaeab5b77cfa758202e56ade6bfd8b/Extra/desk1.png)

### Demo:
![Demo](https://github.com/sasi-upparapalli/IDCard-Generator/blob/a1adc0f515835119258c78ead216de1659a203fc/Extra/demo.gif)

---

## Useful Links 📌

- 🌐 **Live App:** https://sasi-upparapalli.github.io/IDCard-Generator/  
- 💻 **Source Code:** https://github.com/sasi-upparapalli/IDCard-Generator  
- 🤝 **Connect:** https://www.linkedin.com/in/doondi  

---

Feel free to share or improve this project. Contributions and suggestions are always welcome! 🎉
