
![RentRoom Logo](https://media.graphassets.com/WVw5ct3LStuRqZSaIlN8)

**RentRoom** is a web platform designed to simplify property rentals, offering a complete experience for both property owners and tenants. The platform includes various features to make the rental process easy and secure.

![WebContent](https://media.graphassets.com/svpS4HAbRTeRV2DQKmQ0)

---

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Starting the Project](#starting-the-project)
4. [Folder Structure](#folder-structure)
5. [Features](#features)
6. [Scripts](#scripts)
7. [Environment Configuration](#environment-configuration)
8. [Deploy on Vercel](#deploy-on-vercel)
9. [Learn More](#learn-more)

---

## Introduction

RentRoom allows users to search, list, and rent properties with ease and security. Developed with a powerful set of modern tools, the platform enhances the rental experience by providing features such as:

- Property search and filtering
- Secure login and authentication
- User profile management
- Property display on maps
- Real-time notifications and alerts

---

## Technologies Used

RentRoom was built with the following technologies:

- **[Next.js 13.5.7](https://nextjs.org/)**: A React framework for modern web applications, with performance optimization and server-side page rendering.
- **[Prisma](https://www.prisma.io/)**: ORM (Object-Relational Mapping) for easy data manipulation and querying.
- **[NextAuth.js](https://next-auth.js.org/)**: Simplified authentication management, using a Prisma adapter.
- **[React](https://reactjs.org/)**: JavaScript library for building interactive and reusable interfaces.
- **[Zustand](https://zustand.surge.sh/)**: Lightweight state management, easily integrated with React.
- **[Leaflet](https://leafletjs.com/) and [React-Leaflet](https://react-leaflet.js.org/)**: Interactive maps display for property location visualization.
- **[Tailwind CSS](https://tailwindcss.com/)**: CSS framework for fast, responsive styling.
- **[Cloudinary](https://cloudinary.com/)**: Image manipulation and cloud storage.

Other libraries include Axios for HTTP requests, date-fns for date handling, react-hook-form for form control, and react-hot-toast for notifications.

---

## Starting the Project

To start using RentRoom in your local environment, follow the instructions below:

### Prerequisites

Make sure you have Node.js installed.

### Running the Development Server

1. Clone the repository:

   ```bash
   git clone https://github.com/EdLoth/RentRoomAPP.git
   cd RentRoomAPP
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables (see [Environment Configuration](#environment-configuration)).

4. Run the project in development mode:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Folder Structure

The main RentRoom structure includes:

- **/app**: Application pages and routes.
- **/components**: Reusable React components.
- **/prisma**: Prisma configuration, including the schema.prisma file.
- **/styles**: Global style files.
- **/public**: Static resources like images and icons.

---

## Features

1. **User Authentication**:  
   Secure login and session management using NextAuth.js.
   
2. **Property Mapping and Location**:  
   Interactive property map views using Leaflet and React-Leaflet.
   
3. **Favorites**:  
   Save properties as favorites for quick access.
   
4. **Notifications**:  
   Real-time alerts for new properties, updates, and messages.
   
5. **Image Management**:  
   Upload and handle images securely with Cloudinary.
   
6. **Advanced Filtering and Search**:  
   Use multiple filters to find properties matching your criteria.

---

## Scripts

The project’s main scripts include:

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles the project for production.
- `npm run start`: Runs the production server.
- `npm run lint`: Runs linting to check the code quality.

---

## Environment Configuration

To set up the environment, create a `.env.local` file at the root of the project and add the following variables:

```plaintext
DATABASE_URL=
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

These variables include the database connection, authentication settings, and image API details.

---

## Deploy on Vercel

The easiest way to deploy RentRoom is using the [Vercel](https://vercel.com/) platform, which offers seamless integration with Next.js. To deploy:

1. Create a Vercel account.
2. Import the GitHub repository into Vercel.
3. Set up the environment variables in Vercel.
4. Click on "Deploy".

For more information, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma](https://www.prisma.io/docs/)
- [NextAuth.js](https://next-auth.js.org/getting-started/introduction)
- [Leaflet and React-Leaflet](https://react-leaflet.js.org/)

---

RentRoom is continuously being improved to provide an optimized experience for all users.

---

## Mobile Screenshots

Below are screenshots of RentRoom’s mobile interface, showcasing the fully responsive design.

<p align="center">
   <img src="https://media.graphassets.com/9i0m0ozhTeOuW7J60guU" alt="Home Page" width="30%" style="margin-right: 5px;">
   <img src="https://media.graphassets.com/1OBodPT5ySzQRqDn19PQ" alt="Login Page" width="30%" style="margin-right: 5px;">
   <img src="https://media.graphassets.com/k60KaxalT02mxZnNT8QK" alt="Register Page" width="30%">
</p>
<p align="center">
   <img src="https://media.graphassets.com/eAFoIv4TcyxzYG9N4SnA" alt="Property Listing 1" width="30%" style="margin-right: 5px;">
   <img src="https://media.graphassets.com/jIXkpSN1RvuFe0dQIM5K" alt="Property Listing 2" width="30%">
</p>

This documentation covers the main aspects of RentRoom, including setup, features, and deployment instructions. The mobile interface is designed to be 100% responsive, ensuring usability across all screen sizes.
