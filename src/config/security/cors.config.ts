import cors from "cors";
import {frontendUrls} from "../env/env.config.js"

const corsConfig = cors({
origin: frontendUrls,
credentials: true
});

export default corsConfig;