import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "config";

process.env["NODE_CONFIG_DIR"] = ".\\src\\config";

// Import routers
import router from "../routes/product/routes";
// Import error middleware
import { errorMiddleware } from "../middleware/error";

const app = express();

// Define the port to run on
const port = config.get("PORT") || 3000;

// Body parser middleware to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger middleware
app.use(
  morgan(
    ':req[X-Forwarded-For] - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
  )
);

// Cors middleware
app.use(cors());

// Routes
app.use("/", router);

// Error middleware
app.use(errorMiddleware);

export const startServer = () => {
  app.listen(port, () => console.log(`Server started on port ${port}`));
};
