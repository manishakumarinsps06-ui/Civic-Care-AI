Civic Care AI

An AI-powered civic issue reporting and tracking web application designed to help people report local problems and track their complaints.

About the Project

Civic Care AI aims to make civic issue reporting more accessible through a user-friendly web interface and a Django-based backend.

Features

- User registration and login pages
- Dashboard interface
- Civic issue reporting page
- Complaint tracking page
- Django backend
- Responsive web interface (if supported by the current design)

Technology Stack

- Frontend: HTML, CSS, JavaScript
- Backend:Python, Django

Project Structure

Civic-Care-AI/
├── civiclens_backend/
│   ├── manage.py
│   └── civiclens_backend/
├── dashboard.html
├── index.html
├── login.html
├── register.html
├── report.html
├── track.html
├── script.js
├── style.css
└── README.md
```

Getting Started

Prerequisites

- Python
- Git

Run the Backend

1. Open PowerShell in the project directory.
2. Navigate to the backend folder:

   cd civiclens_backend
   

3. Create a virtual environment:

   python -m venv venv
   

4. Activate the environment:

   .\venv\Scripts\Activate.ps1
  

5. Install Django:

   python -m pip install django
   

6. Apply database migrations:

   python manage.py migrate
   

7. Start the development server:

   python manage.py runserver
   

8. Open http://127.0.0.1:8000/ in your browser.

Note: Additional dependencies or configuration may be required. The frontend pages may also need integration with the Django backend.

Future Improvements

- Integrate frontend pages with backend APIs
- Improve complaint tracking
- Add input validation and error handling
- Add automated tests
- Deploy the application online

Author

Manisha Kumari