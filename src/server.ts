import app from "./app.js";
import {port} from "./config/env/env.config.js"

const server = app.listen(port, ()=>{
    console.log(`This server is running on port ${port}`);
});

const shutdownServer = (signal: string)=>{
console.log(`${signal} received. Server is shutting down...`);
server.close(()=>{
    console.log("Server closed.");
    process.exit(0);
});

setTimeout(()=>{
    console.error("Forced shutdown.");
    process.exit(1);
}, 10000);
} 


process.on("SIGINT", ()=> shutdownServer("SIGINT"));
process.on("SIGTERM", ()=> shutdownServer("SIGTERM"));