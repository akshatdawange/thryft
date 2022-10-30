const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/users");
const authRoute = require("./Routes/auth");
const productRoute = require("./Routes/products");
const cartRoute = require("./Routes/cart");
const ordersRoute = require("./Routes/order");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection established"))
.catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", ordersRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running");
})