const express = require("express");
const upload = require("../middlewares/multer");
const User = require("../models/UserModel");
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    res.status(200).json("get user");
  })
  .post(upload.single("avatar"), async (req, res, next) => {
    try {
      const { name } = req.body;
      const image = process.env.HOST_URL + req.image;
      const newUser = User({ name, image });
      const result = await newUser.save();

      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({ status: "failed", message: error });
    }
  });
module.exports = router;
