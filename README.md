# MVC Template

This is a simple MVC template using Express.js, TypeScript, Jest, and two additional pages for handling 404 errors and API documentation.

## Features

- MVC architecture
- Jest for testing
- TypeScript for type safety
- Two additional pages: Not Found Page and API Documentation Page

## Available Routes

<ul>
<li>
/: Home page
</li>
<li>
/api-docs: API documentation
</li>
<li>
/*: 404 Page Not Found
</li>
</ul>

## File Architecture

```bash
mvc-template/
│
├── dist/           # Compiled TypeScript files
│
│── controllers/    # Controller files
│── routes/         # Route files
│── config/         # config files
│── views/          # View files
│── models/         # View files
│── public/         # style and assets files
│── Enums/          # unchangeable variables
|
│── app.ts          # Express application
│── server.ts       # Server setup
├── .env            # Environment variables
├── .gitignore      # Git ignore file
├── package.json    # Project details and dependencies
├── tsconfig.json   # TypeScript configuration
└── README.md       # Project documentation
```

## Dependencies

<ul>
<li>
<b>Express:</b> Fast, unopinionated, minimalist web framework for Node.js .
</li>
<li>
<b>dotenv:</b> Loads environment variables from a .env file into process.env .
</li>
<li>
<b>cookie-parser:</b> Parse Cookie header and populate req.cookies with an object keyed by the cookie names .
</li>
<li>
<b>cors:</b> CORS (Cross-Origin Resource Sharing) middleware for Express .
</li>
</ul>

## Dev Dependencies

<ul>
<li>
<b>TypeScript:</b> Typed superset of JavaScript that compiles to plain JavaScript .
</li>
<li>
<b>Jest:</b> JavaScript testing framework .
</li>
<li>
<b>ts-jest:</b> A TypeScript preprocessor with source map support for Jest .
</li>
<li>
<b>nodemon:</b> Utility that monitors for changes and automatically restarts the server .
</li>

<li>
<b>nodemon:</b> Utility that monitors for changes and automatically restarts the server .
</li>

<li>
<b>ts-node:</b> TypeScript execution environment and REPL for node.js, with source map support .
</li>
<li>
<b>supertest:</b> HTTP assertions made easy, with a fluent API for making requests .
</li>
</ul>

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AG-Jimmy/mvc-template.git
```

2. Install dependencies:

```bash
cd mvc-template
npm install
```

3. Install dependencies:

```bash
cd mvc-template
npm install
```

## Running the Application

To start the application in development mode, run:

```bash
npm run dev
```

## Running the Application

- To start the application in development mode, run:

```bash
npm run dev
```

This will start the server using ts-node and automatically restart the server when changes are detected.

- To start the application in production mode, run:

```bash
npm start
```

This will build the TypeScript files and start the server using node.

- This template is configured with Jest for testing. To run tests, use the following command:

```bash
npm test
```
