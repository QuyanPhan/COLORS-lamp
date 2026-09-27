# COLORS LAMP Stack Application

## Description

COLORS is a simple web application built with the LAMP stack. The app allows users to log in, add colors, search for saved colors, and log out.

The frontend uses HTML, CSS, and JavaScript. The backend uses PHP to communicate with a MySQL database.

## Technologies Used

- Linux
- Apache
- MySQL
- PHP
- HTML
- CSS
- JavaScript
- Git
- GitHub

## Setup Instructions

To run the COLORS application, you need a working PHP and MySQL environment. Apache is used as the web server for the deployed version.

First, clone the repository:

```bash
git clone https://github.com/QuyanPhan/COLORS-lamp.git
cd COLORS-lamp
```

The real database credentials are not included in the repository. A sample configuration file is provided in `LAMPAPI/db.example.php`.

Create your own database configuration file by running:

```bash
cp LAMPAPI/db.example.php LAMPAPI/db.php
```

Then open `LAMPAPI/db.php` and replace the placeholder values with the correct database host, username, password, and database name.

The `db.php` file is ignored by Git so private database information is not uploaded to GitHub.

Make sure MySQL is running and the database and tables required by the application have already been created.

The frontend connects to the PHP API using the `urlBase` value in `frontend/js/code.js`. The deployed version currently uses:

```text
http://quy-4331.xyz/LAMPAPI
```

If the project is run on another server or locally, change `urlBase` so it points to the correct `LAMPAPI` location.

## Running and Accessing the Application

The deployed application can be accessed at:

```text
http://quy-4331.xyz
```

The login page appears first. After a successful login, the user is taken to the color page where they can add colors, search for saved colors, and log out.

For local testing, start a PHP development server from the root of the project:

```bash
php -S localhost:8000
```

Then open:

```text
http://localhost:8000/frontend/
```

For local testing, also change the `urlBase` value in `frontend/js/code.js` to:

```js
const urlBase = 'http://localhost:8000/LAMPAPI';
```

## AI Assistance Disclosure

This project was developed with assistance from generative AI tools:

- **Tool**: ChatGPT, GPT-5.6 Sol (OpenAI, chatgpt.com)
- **Dates**: September 26-27, 2026
- **Scope**: Organizing project files and README documentation
- **Nature of Use**: Used to help organize the project files and draft the README documentation

All AI-assisted work was reviewed, tested, and modified to meet the assignment requirements. Final implementation reflects my understanding of the project.