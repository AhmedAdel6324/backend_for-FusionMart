import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb://txahmedwork:user123@cluster0-shard-00-00.fvffi.mongodb.net:27017,cluster0-shard-00-01.fvffi.mongodb.net:27017,cluster0-shard-00-02.fvffi.mongodb.net:27017/FusionMartYT?ssl=true&replicaSet=atlas-14gium-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("DB Connected"));
};
