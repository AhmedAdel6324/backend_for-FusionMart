import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  updateStateus,
  userOrders,
  verifyOrder,
} from "../controller/orderController.js";

const orderRoute = express.Router();

orderRoute.post("/place", authMiddleware, placeOrder);
orderRoute.post("/verify", verifyOrder);
orderRoute.post("/userorders", authMiddleware, userOrders);
orderRoute.get("/list", listOrders);
orderRoute.post("/status", updateStateus);

export default orderRoute;
