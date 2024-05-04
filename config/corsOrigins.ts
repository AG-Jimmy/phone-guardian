import { CorsOptions } from "cors";

const allowedOrigin = [
  "http://localhost:3000",
  "http://127.0.0.1:9229",
  "http://localhost:9229",
];

const corsOptions: CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (error: Error | null, allow?: boolean) => void
  ) => {
    if (!origin || allowedOrigin.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed By CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
