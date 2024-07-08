import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later.",
  statusCode: 429, // default value
  // keyGenerator: (req: Request) => req.ip, default Ip
});

export default limiter;
