import rateLimit from "express-rate-limit";

const rateLimitConfig = rateLimit({
    windowMs: 10*60*1000,
    limit: 100,
    statusCode:429,
    message: "Too many requests! Please try again later.",
    standardHeaders: true,
    legacyHeaders:false
});

export default rateLimitConfig;