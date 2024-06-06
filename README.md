<!-- @format -->

# Personal Portfolio Website

This is the personal portfolio website for showcasing my projects, skills, and experiences. The website includes various sections such as a books list, movies list, contact me, my hobbies, and personal profile.

## Table of Contents

-  [Purpose](#purpose)
-  [Project Structure](#project-structure)
-  [Setup](#setup)
-  [Usage](#usage)
-  [Deployment](#deployment)
-  [Future Enhancements](#future-enhancements)
-  [Contact](#contact)

## Purpose

The purpose of this website is to provide a personal portfolio that showcases my work and skills. The site is divided into several sections to highlight different aspects of my professional and personal interests:

-  **Books List:** A list of books that I am reading or recommend.
-  **Movies List:** A list of movies that I have watched or recommend.
-  **Contact Me:** A form for visitors to contact me.
-  **My Hobbies:** A page detailing my hobbies.
-  **Personal Profile:** Information about my professional background and skills.

## Project Structure

Personal_Portfolio/
├── assets/
│ ├── images/
│ └── ... (image files)
├── css/
│ ├── books-list.css
│ ├── contact-me.css
│ ├── landingPage.css
│ ├── movies-list.css
│ ├── my-hobbies.css
│ └── personalProfile.css
├── html/
│ ├── books-list.html
│ ├── contact-me.html
│ ├── movies-list.html
│ ├── my-hobbies.html
│ └── personalProfile.html
├── js/
│ ├── backend.js
│ └── scripts.js
├── index.html
└── README.md

## Setup

1. **Clone the Repository:** Ensure you have Git installed on your local machine. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/hbabb/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Open the Project:** Open the project in your preferred code editor (e.g., VS Code).

3. **File Overview:** The files contain comments that provide explanations and guidance on how to update and maintain the website. Refer to these comments for detailed information on each section.

## Usage

1. **Viewing the Website Locally:** Open the `index.html` file in your preferred web browser to view the website.

2. **Editing Content:**
   -  **HTML Files:** Edit the content of each section by modifying the corresponding HTML files in the `html/` directory.
   -  **CSS Files:** Update the styles by modifying the CSS files in the `css/` directory.
   -  **JavaScript Files:** Add or modify functionality by editing the JavaScript files in the `js/` directory.

## Deployment

### Free Hosting with Security Certificates

To host your website for free with security certificates, custom domain, and HTTPS protocols, consider using [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/). Both services allow deployment from private repositories.

1. **Netlify Deployment Steps:**

   -  Create an account on Netlify.
   -  Link your GitHub repository to Netlify (ensure the repository is private).
   -  Configure the build settings (for this static site, set the build command to `null` and the publish directory to `/`).
   -  Deploy the site.
   -  Set up your custom domain in the domain settings on Netlify.
   -  Netlify automatically provides an SSL certificate for your custom domain.

2. **Vercel Deployment Steps:**

   -  Create an account on Vercel.
   -  Link your GitHub repository to Vercel (ensure the repository is private).
   -  Configure the project settings (Vercel typically auto-detects and configures them for static sites).
   -  Deploy the site.
   -  Set up your custom domain in the domain settings on Vercel.
   -  Vercel automatically provides an SSL certificate for your custom domain.

## Future Enhancements

-  **Database Functionality:** Plan to integrate MongoDB Atlas for managing books and movies lists dynamically.
-  **Additional Features:** Potential additions include user authentication, an admin panel for easier updates, and more interactive elements.

## Contact

-  **Name:** Heath Babb
-  **Email:** hbabb@bpscad.com
-  **GitHub:** [hbabb](https://github.com/hbabb)
