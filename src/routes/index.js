const express = require("express");

const userRoute = require("./user.routes");
const authRoute = require("./auth.routes");
const adminRoute = require("./admin.routes");
const receptionist = require("./receptionist.routes");
const router = express.Router();

router.use("/", authRoute);
router.use("/user", userRoute);
router.use("/admin", adminRoute);
router.use("/receptionist", receptionist);

module.exports = router;
