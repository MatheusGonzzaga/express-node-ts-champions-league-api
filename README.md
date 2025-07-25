# Express Node TS Champions League API

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)   ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)   ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)   ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)   ![Tsup](https://img.shields.io/badge/tsup-000000?style=flat&logo=npm&logoColor=white)   ![tsx](https://img.shields.io/badge/tsx-007ACC?style=flat&logo=typescript&logoColor=white)

## Overview

This backend API, built with **Express.js**, **Node.js**, and **TypeScript**, provides features to manage Champions League data, including football players and clubs information.

The project follows a clean architecture pattern with separation into controllers, services, repositories, and models. It uses standardized HTTP responses to ensure clear communication between backend and client.

---

## Features

- List all registered players  
- Retrieve data of a specific player by ID  
- Create (register) new players  
- Update player statistics  
- Delete players  
- List all registered clubs  
- Standardized HTTP responses for statuses like OK, created, not found, etc.  

---

## Technologies Used

- [Node.js](https://nodejs.org/) — backend runtime environment  
- [TypeScript](https://www.typescriptlang.org/) — static typing for better safety  
- [Express.js](https://expressjs.com/) — web framework for building REST APIs  
- [tsup](https://tsup.egoist.dev/) — bundler to build TypeScript into production-ready JavaScript  
- [tsx](https://github.com/esbuild-kit/tsx) — executes TypeScript files directly, with watch mode support  
- [cors](https://www.npmjs.com/package/cors) — middleware to enable CORS on requests  
- [@types/express](https://www.npmjs.com/package/@types/express) and [@types/cors](https://www.npmjs.com/package/@types/cors) — type definitions for Express and CORS  

---

## How to Use?

1. **Clone the repository**  
   `git clone https://github.com/your-username/express-node-ts-champions-league-api.git`

2. **Install dependencies**  
   `npm install`

3. **Start the development server (without watch)**  
   `npm run start:dev`

4. **Start the development server with watch (hot reload)**  
   `npm run start:watch`

5. **Build the project for production**  
   `npm run dist`

6. **Run the compiled build**  
   `npm run start:dist`

---

## API Endpoints

| Method | Endpoint                 | Description                                         |
| ------ | ------------------------ | ------------------------------------------------ |
| GET    | `/players`               | List all players                                   |
| GET    | `/players/:id`           | Get player information by ID                       |
| POST   | `/players`               | Create a new player                                |
| PUT    | `/players/:id`           | Update statistics of the specified player         |
| DELETE | `/players/:id`           | Delete player by ID                                |
| GET    | `/clubs`                 | List all registered clubs                          |

---

## HTTP Responses Used

The API uses standardized HTTP responses via helpers to facilitate consumption, such as:

- `200 OK` — when data is successfully found and returned  
- `201 Created` — when a resource is successfully created  
- `204 No Content` — when there is no data to return  
- `400 Bad Request` — when invalid data is sent  
- `404 Not Found` — when the requested resource does not exist  

---

## Why Express.js with Node.js and TypeScript?

This project focuses on building a well-organized and scalable RESTful API using Express to handle routes and HTTP requests. Using TypeScript provides better code safety and easier maintenance over time.
