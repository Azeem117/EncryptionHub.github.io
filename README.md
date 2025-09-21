# 🔗[Encryption Hub](https://azeem117.github.io/EncryptionHub.github.io/)  

# 🚀 Release v1.0.0 – Simple Encryption Portal

## 🔐 Project Overview
The **Simple Encryption Portal** is a comprehensive web application designed for secure message, image, and file encryption.  
It provides users with advanced cryptography, steganography, and file-level protection, all **executed client-side in the browser**, ensuring **maximum privacy**.  

Key functionalities include:  
- Encrypt and decrypt text messages using passwords  
- Hide secret messages inside images (steganography)  
- Encrypt files of any format (images, videos, audio, documents, etc.)  

The portal is organized into **three modules**: **Encryption**, **Encryption 2.0**, and **Encryption 3.0**, each offering a unique encryption capability.

---

## 🏗️ Modules & Features

### 🔹 1. Encryption (Basic Text Encryption)
- Encrypt messages with a password; only those with the correct password can decrypt them.  
- **Client-Side Security:** All operations happen locally in the browser; no data is sent to a server.  
- **Strong Cryptography:** Uses AES-GCM via Web Crypto API for both confidentiality and integrity.  
- **Robust Password Protection:** PBKDF2 with 100,000 iterations and a randomly generated salt prevents brute-force attacks.  
- **Randomized Encryption:** Unique Initialization Vector (IV) ensures identical messages encrypted with the same password produce different outputs.  
- **User-Friendly Interface:** Includes password visibility toggle, copy-to-clipboard, and smooth loading spinner.  
- **Portable Output:** Encodes salt, IV, and ciphertext into a single Base64 string for easy sharing and storage.  

---

### 🔹 2. Encryption 2.0 (Steganography)
- Hide encrypted messages inside images, making the message visually undetectable.  
- ⚠️ **Important:** Image quality must remain unchanged; compression or alteration may destroy the hidden message.  
- **Enhanced Security:** Combines AES encryption with pixel-level message hiding for a second layer of protection.  
- **Asynchronous & Responsive:** Processes large images using `requestAnimationFrame` to prevent browser freezing. Includes a progress bar for real-time feedback.  
- **Modern UI/UX:** Dark theme with vibrant accent colors, custom modals for alerts, password toggles, and clear instructions for users.  
- **Self-Contained:** HTML, CSS, and JavaScript are integrated into a single file for portability and easy hosting.  

---

### 🔹 3. Encryption 3.0 (File Encryption)
- Encrypts **any file type**, including photos, videos, audio, and documents.  
- To restore usability, rename the encrypted package back to its original format (e.g., `.jpg`, `.mp3`, `.mp4`).  
- **Strong Cryptography:** Uses AES-GCM to ensure confidentiality and integrity.  
- **Secure Key Derivation:** PBKDF2 with high iteration count protects passwords from brute-force attacks.  
- **Client-Side Operation:** No files leave the user’s browser; full privacy maintained.  
- **Responsive & Intuitive UI:** Tailwind CSS ensures usability across devices; clear file input, password field, and dedicated "Encrypt"/"Decrypt" buttons.  
- **Dynamic Feedback:** Real-time status messages and a loading spinner inform users of ongoing processes.  
- **Error Handling:** Provides user-friendly messages for incorrect passwords or corrupted files.  
- **Password Visibility Toggle:** Prevents input errors, enhancing usability.  

---

## 🎯 Project Goal
The project aims to provide a **versatile, secure, and user-friendly encryption solution**, combining:  
- Password-protected message encryption  
- Hidden message embedding in images  
- Full file encryption  
- A modern, responsive, and intuitive user interface  

---

## 📦 Full Release Summary
| Module             | Features                                                                                             |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Encryption**     | Password-protected text messages, AES-GCM, PBKDF2, client-side security, copy-to-clipboard          |
| **Encryption 2.0** | Hidden messages inside images, AES encryption, asynchronous processing, progress bar, self-contained|
| **Encryption 3.0** | File encryption for all formats, AES-GCM, PBKDF2, client-side, responsive UI, dynamic feedback      |

---

## 🔑 Key Technical Highlights
- **Client-Side Security:** Ensures private data and passwords never leave the browser.  
- **AES-GCM Encryption:** Provides secure and authenticated encryption.  
- **PBKDF2 Key Derivation:** Protects passwords using 100,000 iterations and random salt.  
- **Randomized Initialization Vector:** Guarantees unique ciphertext for identical inputs.  
- **Responsive & Modern Design:** Tailwind CSS, hover effects, dark theme, and accessible layout.  
- **User-Friendly Features:** Copy-to-clipboard, password toggles, progress indicators, clear status, and error messages.  
- **Self-Contained & Portable:** Entire application (HTML, CSS, JS) is in one file for easy sharing or hosting.  
- **Robust Steganography:** Encryption 2.0 ensures hidden messages remain secure within images.  
- **Asynchronous Processing:** Handles large files and images without freezing the browser.  

---

## 📜 License
This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.  

You are free to:  
- Use, modify, and distribute the software  
- Share and improve upon the work  

All derivative works must also be distributed under the **GPL-3.0 license**, ensuring the project remains open and free for the community.  

For full license details, see: [GNU GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)  

### ⚖️ Third-Party Licenses

This project uses the following third-party libraries, which are subject to their respective licenses:

| Library        | Purpose                      | License | Website |
|----------------|------------------------------|---------|---------|
| Tailwind CSS   | Styling & UI                 | MIT     | [https://tailwindcss.com](https://tailwindcss.com) |
| Google Fonts - Inter | Font                   | SIL Open Font License | [https://fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter) |
| CryptoJS       | AES encryption               | MIT     | [https://cdnjs.com/libraries/crypto-js](https://cdnjs.com/libraries/crypto-js) |

All included third-party code retains its original license, and this project distributes it in compliance with those terms.

---

## ✅ Conclusion
This release of the **Simple Encryption Portal** demonstrates a **secure, modern, and portable web application** for encryption enthusiasts, developers, and casual users alike.  
It combines **robust cryptography**, **user-friendly design**, and **cutting-edge steganography** to provide a comprehensive encryption platform.  

Visit the live portal here: 🔗 [Encryption Hub](https://azeem117.github.io/EncryptionHub.github.io/)  

