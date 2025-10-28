# 🔗 [Encryption Hub](https://azeem117.github.io/EncryptionHub.github.io/)  

# 🚀 Simple Encryption Portal – Release V.1.0.3

## 🔐 Project Overview
**Simple Encryption Portal** is a comprehensive, client-side web application for secure message, image, and file encryption.  
All cryptographic operations occur in the browser, ensuring **maximum privacy**.  

**Key capabilities:**  
- Encrypt and decrypt text messages using passwords.  
- Hide secret messages inside images (steganography).  
- Encrypt files of any format (images, videos, audio, documents).  
- Generate **strong passwords from weak passwords** using PBKDF2 with **10,000,000 iterations** (Encryption 5.0).  

The portal includes **five modules**, each offering unique encryption functionality.

---

## 🏗️ Modules & Features

### 🔹 1. Encryption (Basic Text Encryption)
- Encrypt messages with AES-GCM using a password.  
- **Client-Side Security:** All operations happen locally; no data leaves the browser.  
- **Robust Key Derivation:** PBKDF2 with 100,000 iterations and random salt.  
- Random IV ensures identical messages encrypted with the same password produce different outputs.  
- User-friendly interface with password toggle, copy-to-clipboard, and loading spinner.  
- Portable Base64 output combining salt, IV, and ciphertext.  

---

### 🔹 2. Encryption 2.0 (Steganography)
- Hide encrypted messages inside images without altering quality.  
- Combines AES encryption with pixel-level message embedding.  
- Asynchronous processing prevents browser freezing; includes progress bar.  
- Modern, dark-themed UI with vibrant accents.  
- Self-contained HTML, CSS, and JS for easy portability.  

---

### 🔹 3. Encryption 3.0 (File Encryption)
- Encrypts any file type (images, videos, audio, documents).  
- AES-GCM ensures confidentiality and integrity.  
- PBKDF2 with high iteration counts for password security.  
- Client-side operation; files never leave the browser.  
- Responsive UI with clear buttons, file input, and password toggle.  
- Real-time status messages, loading spinner, and error handling.  

---

### 🔹 4. Encryption 4.0 (Unified Modern Encryption)
- Combines text encryption, steganography, and PDF export.  
- Password-protected PDFs embed encrypted messages.  
- LSB image steganography hides payloads without altering visual quality.  
- AES-GCM with **1,000,000 PBKDF2 iterations**, unique IVs, and random salts.  
- Client-side processing with progress indicators.  
- Modern, responsive UI with dark theme, gradient accents, glassmorphism cards, hover/focus effects, and inline error handling.  

---

### 🔹 5. Encryption 5.0 (Ultra-Strong Password Generation)
- Converts weak passwords into **high-entropy, strong passwords**.  
- Uses **PBKDF2 with 10,000,000 iterations** and random salt.  
- Derived passwords can be used to encrypt messages, files, and PDFs.  
- AES-GCM ensures secure encryption using generated strong passwords.  
- Client-side operation guarantees privacy.  
- Real-time progress feedback for high iteration counts.  
- Base64 output for easy copying and storage.  

---

## 🎯 Project Goal
Provide a **secure, versatile, and user-friendly encryption platform** that combines:  
- Strong password generation  
- Text encryption  
- Hidden message embedding in images  
- Password-protected PDF export  
- Full file encryption  
- Modern, responsive UI  

---

## 📦 Full Release Summary
| Module             | Features                                                                                             |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Encryption**     | Text encryption, AES-GCM, PBKDF2, client-side security, copy-to-clipboard                            |
| **Encryption 2.0** | Image steganography, AES encryption, asynchronous processing, progress bar, self-contained         |
| **Encryption 3.0** | File encryption (all formats), AES-GCM, PBKDF2, client-side, responsive UI, dynamic feedback        |
| **Encryption 4.0** | Unified encryption, PDF export, LSB steganography, AES-GCM with PBKDF2, client-side, progress feedback, modern UI |
| **Encryption 5.0** | Weak-to-strong password generation, AES-GCM encryption, PBKDF2 (10M iterations), client-side, progress feedback |

---

## 🔑 Technical Highlights
- **Client-Side Security:** All operations occur in-browser; no data is transmitted.  
- **AES-GCM Encryption:** Provides secure and authenticated encryption.  
- **PBKDF2 Key Derivation:** Up to 10,000,000 iterations with random salt.  
- **Random IVs:** Ensures unique ciphertext even for identical inputs.  
- **Responsive Design:** Tailwind CSS, dark theme, hover effects, accessible layout.  
- **User-Friendly Features:** Copy-to-clipboard, password toggles, progress indicators, clear error messages.  
- **Self-Contained & Portable:** Entire app is in one HTML file.  
- **Robust Steganography & PDF Security:** Hidden payloads in images and password-protected PDFs.  
- **Asynchronous Processing:** Handles large files and images without freezing.  

---

## 📜 License
Licensed under **GNU GPL v3.0**.  
- Free to use, modify, and distribute.  
- All derivatives must also use GPL-3.0 license.  

Full license: [GNU GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)  

---

## ⚖️ Third-Party Libraries

| Library        | Purpose                      | License | Website |
|----------------|------------------------------|---------|---------|
| Tailwind CSS   | Styling & UI                 | MIT     | [https://tailwindcss.com](https://tailwindcss.com) |
| Google Fonts - Inter | Font                   | SIL Open Font License | [https://fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter) |
| CryptoJS       | AES encryption               | MIT     | [https://cdnjs.com/libraries/crypto-js](https://cdnjs.com/libraries/crypto-js) |
| pdfmake        | PDF generation & password protection | MIT     | [pdfmake](https://pdfmake.github.io/docs/) |
| PDF.js         | PDF reading & payload extraction | Apache 2.0 | [PDF.js](https://mozilla.github.io/pdf.js/) |

---

## ✅ Conclusion
**Simple Encryption Portal V1.0.3** is a secure, modern, and portable encryption platform combining:  
- Robust cryptography  
- Steganography  
- Strong password generation  
- Password-protected PDF export  
- File encryption  
- Responsive, user-friendly design  

Visit the live portal: 🔗 [Encryption Hub](https://azeem117.github.io/EncryptionHub.github.io/)  

---

## 🌐 Deployment (GitHub Pages)

This repository includes an automated deployment workflow for GitHub Pages.

How it works:
- On every push to `main`, GitHub Actions builds and deploys the site to GitHub Pages.
- Workflow file: `.github/workflows/pages.yml`

One-time setup in GitHub:
1. Go to Repository Settings → Pages
2. Set Source to “GitHub Actions”
3. Save. After the next push, the site will be live at:
	- `https://azeem117.github.io/EncryptionHub.github.io/`

Local preview (optional):
- You can open `index.html` directly in a browser, or use a simple static server for proper service worker behavior.

---

## 📱 Install as a PWA

Encryption Hub is installable as a Progressive Web App (PWA):
- Supports offline usage with a service worker and precached assets
- Includes a web app manifest and icons

To install:
1. Visit the live site in Chrome/Edge.
2. Click the “Install App” icon in the address bar (or use browser menu → Install).

Notes:
- An `offline.html` fallback is included for when the network is unavailable.
- A custom `404.html` is provided for GitHub Pages routing.
