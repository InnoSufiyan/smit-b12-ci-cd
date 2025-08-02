import express from "express";
import router from "./routes/routes.js";

const app = express();

app.use("/", router);

const port = process.env.PORT || 3000;
// For local development

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});