import express from "express";
import type { Request, Response } from "express";
import helmetConfig from "./config/security/helmet.config.js";
import corsConfig from "./config/security/cors.config.js";
import rateLimitConfig from "./config/security/rate-limit.config.js";

// Create Express application instance
const app = express();


/**
 * Trust the first proxy server.
 * Useful when the app runs behind :
 * - Nginx
 * - Render
 * - Railway
 * - Vercel
 * - Load balancers
 * 
 * This allows Express to correctly detect
 * the real client IP address
 */
app.set("trust proxy", 1);


/**
 * Remove the "X-Powered-By" header.
 * It helps hide the fact that the app uses Express,
 * improving security
 */
app.disable("x-powered-by");


/////////////////////////
// HELMET
////////////////////////

/**
 * Helmet add several HTTP security headers.
 * It protects 
 * XSS attacks
 * Clickjacking
 * MIME sniffing
 * Other common vulnerabilities
 * See src/config/security/helmet.config.ts
 */
app.use(helmetConfig);


///////////////////
// CORS
//////////////////

/** 
 * CORS (cross origin resource sharing)
 * allows request from approved frontend urls
 * to communicate with backend
 * See src/config/security/cors.config.ts
*/
app.use(corsConfig);



/////////////////////
// EXPRESS RATE LIMIT
/////////////////////

/**
 * Express rateLimit protects API from
 * brute-force attacks
 * spam
 * API abuse
 * credential stuffing
 * DDoS attack  
*/
app.use(rateLimitConfig);

/**
 * BODY PARSERS
 */
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

/**
 * Route Check
*/

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running.");
});


// Export default 
export default app;