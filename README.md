\# Civic Care AI



An AI-powered civic issue reporting and tracking project designed to help people report local problems and follow their status.



\## About the Project



Civic Care AI aims to make civic issue reporting more accessible by providing a web interface for users to report problems and track submitted complaints.



\## Features



\- User registration and login pages

\- Dashboard interface

\- Civic issue reporting page

\- Complaint tracking page

\- Django-based backend

\- Web interface built with HTML, CSS, and JavaScript



\## Technology Stack



\- \*\*Frontend:\*\* HTML, CSS, JavaScript

\- \*\*Backend:\*\* Python, Django



\## Project Structure



```text

Civic-Care-AI/

├── civiclens\_backend/

│   ├── manage.py

│   └── civiclens\_backend/

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



\## Getting Started



\### Prerequisites



\- Python installed on your computer

\- Git installed on your computer



\### Run the Django Backend



1\. Open a terminal in the project directory.

2\. Move into the backend folder:



&#x20;  ```bash

&#x20;  cd civiclens\_backend

&#x20;  ```



3\. Create and activate a virtual environment.



&#x20;  On Windows PowerShell:



&#x20;  ```powershell

&#x20;  python -m venv venv

&#x20;  .\\venv\\Scripts\\Activate.ps1

&#x20;  ```



4\. Install Django:



&#x20;  ```bash

&#x20;  python -m pip install django

&#x20;  ```



5\. Run database migrations:



&#x20;  ```bash

&#x20;  python manage.py migrate

&#x20;  ```



6\. Start the development server:



&#x20;  ```bash

&#x20;  python manage.py runserver

&#x20;  ```



7\. Open `http://127.0.0.1:8000/` in your browser.



\*\*Note:\*\* Additional Python packages or backend configuration may be required depending on the project's implementation. The frontend pages may also need to be configured to communicate with the backend.



\## Future Improvements



\- Integrate frontend pages with backend APIs

\- Add persistent civic complaint storage

\- Improve complaint status tracking

\- Add input validation and error handling

\- Add automated tests and deployment



\## Author



Manisha Kumari

