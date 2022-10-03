const multer = require("multer");
function up(link, req) {
  req.image = link;
  return link;
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/image");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, up(uniqueSuffix + file.originalname, req));
    console.log(req.body);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 3000000,
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "avatar") {
      if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only jpeg / png file allowed."));
      }
    }
  },
});

module.exports = upload;
