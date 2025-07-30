# 🌍 Natours – Tour Booking Application
> A full-stack web application to explore, book, and review nature tours worldwide. Built with Node.js, Express, MongoDB, and Pug. Secure, scalable.
---
## 🚀 Features
- ✅ User Authentication & Role-Based Authorization
- 🏕 Browse, Filter & View Tour Packages
- 💳 Book Tours
- 🗺️ Interactive Map (Mapbox) for Tour Locations
- 🌟 Write, Edit, and Delete Reviews
- 🖼 Upload and Optimize Images (Sharp, Multer)
- 🛡 Secure APIs (JWT, Helmet, XSS Protection)
- 📧 Email Notifications (Nodemailer)
---
## 🧑‍💻 Tech Stack
- **Frontend**: Pug, HTML, CSS, JavaScript, Leaflet/Mapbox
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, Bcrypt
- **Security**: Helmet, Rate Limiting, XSS Clean, Mongo Sanitize
- **Image Handling**: Multer, Sharp
- **Email Service**: Mailtrap / SendGrid (via Nodemailer)
- **Dev Tools**: Parcel, Nodemon, Morgan, dotenv

## 📦 Installation
### 1. Clone the Repository
```bash
git clone https://github.com/adarshtiwari908/natours.git
cd natours
````
### 2. Install Dependencies
```bash
npm install
```
## ▶️ Running the App
### Development
```bash
npm run dev
```
### Production
```bash
npm run build:js
npm start
```
---

## 📁 Project Structure

```
natours/
│
├── controllers/         # Route handlers
├── models/              # Mongoose schemas
├── routes/              # Express routes
├── public/              # Static files
├── views/               # Pug templates
├── utils/               # Utility functions
├── dev-data/            # Dummy data for testing
├── app.js               # App setup
├── server.js            # Server startup
└── config.env           # Environment variables
```

---

## 📡 API Endpoints

### Tours

* `GET /api/v1/tours` – Get all tours
* `GET /api/v1/tours/:id` – Get tour by ID
* `POST /api/v1/tours` – Create tour (admin)
* `PATCH /api/v1/tours/:id` – Update tour
* `DELETE /api/v1/tours/:id` – Delete tour (admin)

### Users

* `POST /api/v1/users/signup` – Register user
* `POST /api/v1/users/login` – Login user
* `GET /api/v1/users/me` – Get current user
* `PATCH /api/v1/users/updateMe` – Update profile

### Bookings

* `GET /api/v1/bookings/checkout-session/:tourId` – Create Stripe session
* `POST /webhook-checkout` – Stripe webhook for completed bookings

### Reviews

* `GET /api/v1/reviews` – Get all reviews
* `POST /api/v1/tours/:tourId/reviews` – Create review for a tour

---

## 📌 How It Works

1. Users can sign up, log in, and update profiles
2. Browse tours with filters and sorting
3. Book tours using Stripe payment gateway
4. Leave reviews for completed tours
5. Admins can manage users, tours, reviews, and bookings

---
## 🔐 Security Highlights

* HTTP Headers secured with Helmet
* Rate Limiting to prevent brute-force attacks
* Data sanitized to prevent NoSQL Injection & XSS
* Passwords hashed with Bcrypt
* Token-based authentication (JWT)
---
