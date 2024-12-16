import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
} from "../controller/productController.js";
import multer from "multer";

const productRouter = express.Router();

//todo image storage engine

// إعداد تخزين الملفات
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // تحديد المجلد الذي سيحفظ فيه الملف
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // تحديد اسم الملف
  },
});

// استخدام multer
const upload = multer({ storage: storage });

productRouter.post("/add", upload.single("image"), addProduct);
productRouter.get("/list", listProduct);
productRouter.post("/remove", removeProduct);

export default productRouter;
