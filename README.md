# Node.js & Express API Security System

## Description

This is an Express API security system built with Node.js, Express.js, and TypeScript.

This self-descriptive project explains how to configure and understand major security features
required for a production-ready Express backend application.

## Project Setup

### package.json

```json
{
  "main": "/src/server.ts",

  "type": "module",

  "dependencies": {
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "express-rate-limit": "^8.5.2",
    "helmet": "^8.2.0",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/node": "^25.9.1",
    "tsx": "^4.22.3",
    "typescript": "^6.0.3"
  }
}
```

### tsconfig.json

- For node v24.15.0 and later version
- Prisma ORM recommends esnext, otherwise es2024
- Match the following lines

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",

    "module": "nodenext",
    "target": "esnext",

    "moduleResolution": "nodenext",
    "esModuleInterop": true
  },
  "include": ["src"]
}
```

## Features

See `src/app.ts` for the complete security implementation.
See `src/config/security/**` for security configurations.

### Remove the "X-Powered-By" Header.

This helps hide the fact that the app uses Express, improving security by reducing technology exposure.

```js
app.disable("x-powered-by");
```

### Helmet Security Middleware

Helmet adds several HTTP security headers. It helps protect against:

- XSS attacks
- Clickjacking
- MIME sniffing
- Other common vulnerabilities

See `src/config/security/helmet.config.ts`

```js
app.use(helmetConfig);
```

### CORS (Cross-Origin Resource Sharing) Security Middleware

CORS is a security mechanism that allows requests from authorised frontend URLs or IP addresses to communicate with the backend while restricting access from unauthorised origins.

See `src/config/security/cors.config.ts`

```js
app.use(corsConfig);
```

### Express Rate Limit Security Middleware

Express `rateLimit` protects the API from:

- Brute-force attacks
- Spam
- API abuse
- Credential stuffing
- DDoS attack

See `src/config/security/rate-limit.config.ts`

```js
app.use(rateLimitConfig);
```

### Body Parsers Middleware

This parses incoming JSON and URL-encoded request bodies while limiting payload size to help prevent large request abuse.

```js
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
```

## Summary

Maintain the following middleware sequence to ensure proper security, request handling, and application behavior.

```js
import express from "express";
import type {Request, Response} from "express";
import helmetConfig from "./config/security/helmet.config.js";
import corsConfig from "./config/security/cors.config.js";
import rateLimitConfig from "./config/security/rate-limit.config.js";


const app = express();
app.set("trust proxy", 1);
app.disable("x-powered-by");

app.use(helmetConfig);
app.use(corsConfig);
app.use(rateLimitConfig);

app.use(express.json({limit: "10kb"}));
app.use(express.urlencoded({extended:true, limit: "10kb"}));
```

---

## Author

**Mamun Hossain**

Backend Engineer

Building scalable, high-performance, and secure API systems with Node.js and TypeScript.

- [GitHub](https://github.com/erabossco)
- [LinkedIn](https://linkedin.com/in/eraboss)
