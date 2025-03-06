# Password Generator

## Overview
This is a **simple and responsive Password Generator** built using **HTML, CSS, and JavaScript**. It allows users to generate random passwords of **8, 12, or 16 characters** with a mix of lowercase letters, uppercase letters, numbers, and special characters. The generated password can also be **copied to the clipboard**.

---

## Features
- **Random Password Generation** – Generates secure passwords with different character lengths.  
- **Customizable Length** – Choose between 8, 12, or 16 characters.  
- **Copy to Clipboard** – Easily copy the generated password.  
- **Responsive Design** – Works on all screen sizes, including mobile.  
- **User-Friendly UI** – Simple interface with easy-to-use buttons.  

---

## Technologies Used
- **HTML** – Structure of the web page  
- **CSS** – Styling and responsiveness  
- **JavaScript** – Logic for password generation and copying  

---

## How to Use
1. **Open the project** in a browser.  
2. **Select the password length** (8, 12, or 16 characters).  
3. Click the **"Generate Password"** button.  
4. The password appears in the display box.  
5. Click **"Copy"** to copy the password to your clipboard.  

---

## Project Structure
```
  Password-Generator
│── index.html        # HTML structure
│── style.css         # Styling and responsiveness
│── script.js         # JavaScript logic
```

---

## Code Explanation
### **JavaScript Logic**
- The function `generaterandomnstring(length)` generates a **random string** based on the selected length. It uses the **Fisher-Yates shuffle algorithm** to randomly shuffle the elements.
- The `generate_password()` function checks the selected radio button to determine the password length and then calls the **random generator** function.
- The `copy_btn` event listener **copies** the generated password to the clipboard.

---

## Future Improvements
🔹 Add an **option to customize password complexity** (e.g., include/exclude special characters).  
🔹 Implement **local storage** to save generated passwords.  
🔹 Create a **dark mode** for better UI experience.  

---

## License
This project is **open-source** and free to use. Modify and enhance as needed!

