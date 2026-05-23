import helmet from "helmet";

const helmetConfig = helmet({
    contentSecurityPolicy: false,
});

export default helmetConfig;