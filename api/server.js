import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { connectDB } from "../config/db.js";
import productRouter from "../routes/productRoute.js";
import userRouter from "../routes/userRoute.js";
import cartRouter from "../routes/cartRoute.js";
import orderRoute from "../routes/orderRoute.js";

//? app config
const app = express();

//? middlewares
app.use(express.json());
app.use(cors());

//? db connection
connectDB();

//todo api endpoints
app.use("/api/product", productRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  res.send("API Working");
});

//? تصدير التطبيق كـ handler
export default app;
