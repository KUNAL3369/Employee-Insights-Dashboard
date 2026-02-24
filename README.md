# Employee Insights Dashboard

Employee Insights Dashboard is a responsive React application built to demonstrate a complete frontend workflow from authentication to data visualization. The application focuses on clean UI, reliable state handling, REST API integration, protected routing, and browser-based camera access.

The project simulates a real-world internal dashboard where users can securely log in, explore employee data, capture images using the device camera, and visualize salary insights through charts.


---

## 🌐 Live Demo

**Deployed URL:**  
https://employee-insights-dashboard-1qg1edd3t-kunal3369s-projects.vercel.app/

---


## 🌐 Screenshots of important screens & Screen recording of end-to-end working app


**Googledrive URL:**  
https://drive.google.com/drive/folders/1NVvpD5HauSukGgu-_RdpjfwpACMyzGj8?usp=sharing

---

## 🚀 Features

- Static login with validation  
- Employee list fetched from REST API  
- Employee details view  
- Webcam photo capture  
- Salary bar chart visualization  
- Protected routes with logout  
- Clean, responsive UI  

---

## 🔐 Demo Credentials

Username: testuser  
Password: Test123  

---

## 🧱 Tech Stack

- React (Vite)  
- React Router  
- Tailwind CSS  
- Recharts (Bar Chart)  
- Browser MediaDevices API (Camera)  
- REST API integration  

---

## 📂 Project Structure

```

src/
├── pages/
│   ├── Login.jsx
│   ├── List.jsx
│   ├── Details.jsx
│   ├── PhotoResult.jsx
│   └── Charts.jsx
├── services/
│   └── api.js
├── components/
│   └── ProtectedRoute.jsx
└── App.jsx

```

---

## 🔄 Application Flow

### 1. Login Page
- Validates hardcoded credentials  
- Shows error on invalid login  
- Stores session locally  
- Redirects to employee list  

### 2. Employee List
- Fetches data from API  
- Displays employees in cards  
- Click navigates to details  
- Logout clears session  
- Bar chart button shows salary chart  

### 3. Employee Details
- Shows selected employee info  
- Accesses webcam using browser API  
- Capture button takes photo  

### 4. Photo Result
- Displays captured image  
- Option to return to list  

### 5. Bar Chart
- Plots salaries of first 10 employees  
- Built using Recharts  

---

## 📡 API Used

**Endpoint**

```

POST [https://backend.jotish.in/backend_dev/gettabledata.php](https://backend.jotish.in/backend_dev/gettabledata.php)

````

**Payload**

```json
{
  "username": "test",
  "password": "123456"
}
````

---

## ▶️ How to Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open in browser
http://localhost:5173
```

---

## 🧪 Key Implementation Notes

* Handles array-based API response safely
* Prevents crashes on empty navigation state
* Uses protected routing pattern
* Responsive centered layout
* Hover states added for better UX
* Clean camera permission handling

---

## 👨‍💻 Author

**Kunal Prabhakar**  
Frontend Developer

GitHub: [https://github.com/KUNAL3369](https://github.com/KUNAL3369)  
LinkedIn: [https://linkedin.com/in/prabhakarkunal](https://linkedin.com/in/prabhakarkunal)  
