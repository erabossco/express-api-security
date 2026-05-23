# Node.js & Express API Security

## Description

This is an Express API security project built with Node.js and Express.js, and TypeScript.

This self-descriptive project explains how to configure and understand major security features
required for a production-ready Express backend application.

## Project Setup

### package.json

```json
{
  "main": "/src/server.ts",

  // Change type commonjs to module
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

    // Check these lines
    "module": "nodenext",
    "target": "esnext",

    // insert these lines also if missing
    "moduleResolution": "nodenext",
    "esModuleInterop": true
  },
  // our project rootDir is src
  "include": ["src"]
}
```

## Features
