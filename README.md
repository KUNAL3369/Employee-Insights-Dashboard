```markdown
# Employee Insights Dashboard
 
The app demonstrates authentication flow, API integration, state handling, camera capture, and data visualization.

## 🌐 Live Demo

**[View Live Applicati(https://employee-insights-dashboard-1qg1edd3t-kunal3369s-projects.vercel.app/)**

## 🚀 Live Features

- Static login with validation
- Employee list fetched from REST API
- Employee details view
- Webcam photo capture
- Salary bar chart visualization
- Protected routes with logout
- Clean, responsive UI

##  Demo Credentials

Username: testuser
Password: Test123

##  Tech Stack

- React (Vite)
- React Router
- Tailwind CSS
- Recharts (Bar Chart)
- Browser MediaDevices API (camera)
- REST API integration

##  Project Structure

src/
├── pages/
│   ├── Login.jsx
│   ├── List.jsx
│   ├── Details.jsx
│   ├── PhotoResult.jsx
│   └── BarChartPage.jsx
├── services/
│   └── api.js
├── components/
└── App.jsx



## Application Flow

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

##  API Used

**Endpoint**

POST https://backend.jotish.in/backend_dev/gettabledata.php


**Payload**
json
{
  "username": "test",
  "password": "123456"
}


##  How to Run Locally

bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
http://localhost:5173


##  Key Implementation Notes

* Handles API array response safely
* Prevents crashes on empty data
* Uses protected routing pattern
* Webcam cleaned up on unmount
* Responsive layout with centered containers
* Hover states added for better UX
