# 💰 Finance Backend API

## 🚀 Overview

This project is a backend system for managing financial records with secure authentication and role-based access control.

It allows users to track income and expenses, manage financial data, and view dashboard analytics such as total balance and category-wise summaries.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (password hashing)

---

## 🔐 Features

### 👤 Authentication

* User registration and login
* Password hashing using bcrypt
* JWT-based authentication

### 🔑 Role-Based Access Control

* **Admin** → Full access (CRUD operations)
* **Analyst** → View data and analytics
* **Viewer** → Read-only access

### 💰 Financial Records

* Create, update, delete records
* Fields:

  * Amount
  * Type (income / expense)
  * Category
  * Date
  * Notes
* Filtering by type, category, and date

### 📊 Dashboard Analytics

* Total income
* Total expenses
* Net balance
* Category-wise totals

---

## 📂 Project Structure

```
finance-backend/
│
├── models/
├── controllers/
├── routes/
├── middleware/
├── config/
│
├── app.js
├── .env
├── package.json
```

---

## 📊 API Endpoints

### 🔐 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### 👤 Users

* `GET /api/users`

### 💰 Records

* `POST /api/records`
* `GET /api/records`
* `PUT /api/records/:id`
* `DELETE /api/records/:id`

### 📊 Dashboard

* `GET /api/dashboard/summary`

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/finance-backend.git
cd finance-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create .env file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=secretkey
```

### 4️⃣ Run the server

```bash
npm run dev
```

👉 Server will run at:

```
http://localhost:5000
```

---

## 🔐 Authentication Usage

After login, you will receive a JWT token.

Use it in headers:

```
Authorization: Bearer <your_token>
```

---

## 📌 Assumptions

* Roles are predefined (admin, analyst, viewer)
* JWT is used for authentication
* MongoDB is used for data storage

---

## 🚀 Future Enhancements

* Pagination for records
* Advanced filtering & search
* MongoDB aggregation for analytics
* API documentation (Swagger)
* Deployment (Render / Railway)

---

## 🎯 Key Highlights

* Clean backend architecture
* Middleware-based authentication and authorization
* Secure password handling
* Efficient data processing logic

---

## 👨‍💻 Author

**Mani Kanta**

