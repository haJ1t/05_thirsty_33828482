# 🥤 Thirsty Student Shop

**Thirsty Student Shop** is a web application built using **Node.js, Express, and EJS** that simulates a student-run beverage shop.  
The site demonstrates **dynamic content rendering**, **form handling**, and **modern responsive design** with a fully customized CSS theme.

---

## 🌐 Project Overview

This project was developed as part of **Lab 5 — Thirsty Student Shop**, focusing on:
- Creating multiple **dynamic EJS views**
- Handling **form submissions** (GET & POST)
- Passing **variables and arrays** between routes and templates
- Implementing **partials** for a reusable layout (header/footer)
- Designing a **modern, responsive user interface**

---

## ⚙️ Technologies Used

| Category | Tools / Libraries |
|-----------|-------------------|
| Backend  | Node.js, Express.js |
| Frontend | HTML5, CSS3, EJS Templates |
| UI/UX | Google Fonts (Inter), Font Awesome Icons |
| Hosting (Optional) | Render / Forever / Localhost |

---

## 📂 Project Structure

```
05_thirsty_student_shop/
│
├── public/
│   └── style.css              # Global responsive stylesheet
│
├── routes/
│   └── main.js                # Express route definitions
│
├── views/
│   ├── index.ejs              # Home page
│   ├── about.ejs              # About page
│   ├── register.ejs           # Registration form
│   ├── survey.ejs             # Survey form
│   ├── survey_thanks.ejs      # Thank-you confirmation page
│   ├── search.ejs             # Search form and results
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
├── app.js / index.js          # Express app setup
├── package.json               # Dependencies and scripts
└── links.txt                  # Localhost & deployment URLs
```

---

## 🚀 Features Implemented

### 🏠 **Home Page**
- Dynamic shop name and product categories  
- Responsive hero section with call-to-action buttons  
- Auto-generated product cards with Unsplash images  

### 🧑‍💼 **About Page**
- Dynamic list of shop locations and managers  
- Modern layout using Flexbox and CSS Grid  
- Icons and imagery to enhance branding  

### 📝 **Register Page**
- Form to collect user information (first name, last name, email)  
- Validation and consistent styling  

### 🧾 **Survey Page**
- Multi-question feedback form  
- Responsive, card-based layout  
- Redirects to a custom **Thank-You page**

### 💬 **Search Page**
- Dynamic search form and results display  
- Category filter and result feedback  

### 🙏 **Thank-You Page**
- Animated confirmation card  
- Smooth integration with global CSS theme  

---

## 🎨 Design Highlights

- **Premium animated gradient header** and **glowing footer**
- **Card-based layout** for all main content areas
- **Reusable buttons**, consistent color palette, and unified typography
- **Fully responsive**: adapts to mobile, tablet, and desktop screens
- Uses `:root` CSS variables for easy theme customization

---

## 🧠 Learning Outcomes

Through this lab, the project demonstrates:
- Integration of **EJS templating** with Express routes  
- Practical use of **GET/POST forms** and parameter handling  
- Advanced **CSS animation** and responsive layout design  
- Code reusability via **partials and variables**

---

## 💡 How to Run Locally

1. Clone or download this repository  
   ```bash
   git clone https://github.com/haJ1t/05_thirsty_33828482
   cd thirsty-student-shop
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Start the server  
   ```bash
   node index.js
   ```
   or, if defined:
   ```bash
   npm start
   ```

4. Open your browser and visit:  
   **http://localhost:8000**

---

## 🔗 Links

**Localhost URLs**
```
Home:        http://localhost:8000/
About:       http://localhost:8000/about
Register:    http://localhost:8000/register
Survey:      http://localhost:8000/survey
Search:      http://localhost:8000/search
Thank You:   http://localhost:8000/survey_thanks
```

**Deployment (if applicable)**
```
Render / Forever link: https://your-app-name.onrender.com
```

**GitHub Repository**
```
https://github.com/haJ1t/05_thirsty_33828482
```

---

## 🏁 Author

**Halit Ozger**  
Student | Full-Stack Web Development Lab 5 – Thirsty Student Shop  
*Created with focus on functionality, design excellence, and code quality.*