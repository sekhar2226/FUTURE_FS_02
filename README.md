# Client Lead Management System (Mini CRM)

## Overview

The Client Lead Management System (Mini CRM) is a full-stack web application developed using React.js and Django REST Framework. It helps businesses manage client leads efficiently by storing, tracking, updating, and organizing lead information.

This project was developed as part of Future Interns Task 2.

---

## Features

- Add new leads
- View all leads
- Search leads by name or email
- Update lead status (New, Contacted, Converted)
- Delete leads
- Dashboard statistics
- Analytics section
- Responsive dark-themed UI
- REST API integration
- Persistent database storage

---

## Dashboard Features

### Dashboard Cards
- Total Leads
- New Leads
- Contacted Leads
- Converted Leads

### Lead Management
- Create Leads
- Read Leads
- Update Status
- Delete Leads

### Search Functionality
- Search leads instantly by name or email

### Analytics
- Displays lead counts based on status

---

## Tech Stack

### Frontend
- React.js
- Bootstrap
- Axios

### Backend
- Django
- Django REST Framework
- Django CORS Headers

### Database
- SQLite

### Deployment
- Vercel (Frontend)
- Render (Backend)

### Version Control
- Git
- GitHub

---

## Project Structure

```
FUTURE_FS_02/
│
├── backend/
│   ├── crm_backend/
│   ├── leads/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/sekhar2226/FUTURE_FS_02.git
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Live Demo

### Frontend

https://future-fs-02-amber.vercel.app/

### Backend API

https://future-fs-02-zupu.onrender.com/api/leads/

---

## API Endpoints

### Get All Leads

```
GET /api/leads/
```

### Create Lead

```
POST /api/leads/
```

### Update Lead

```
PUT /api/leads/<id>/
```

### Delete Lead

```
DELETE /api/leads/<id>/
```

---

## Screenshots

### Dashboard
Add dashboard screenshot here.

### Add Lead Form
Add add-lead screenshot here.

### Analytics
Add analytics screenshot here.

### Lead Management
Add lead management screenshot here.

---

## Future Improvements

- User Authentication
- Export Leads to CSV
- Charts and Reports
- Role-Based Access
- Email Notifications

---

## Author

**Basava Yagna Sekhar**

GitHub: https://github.com/sekhar2226

LinkedIn: https://www.linkedin.com/in/sekhar-basava

---

## Task Information

Future Interns Internship

Task 2: Client Lead Management System (Mini CRM)

Status: Completed ✅
