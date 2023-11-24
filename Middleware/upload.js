import path from "path"
import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/') // sets the destination directory for saving the uploaded file
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + '-' + file.originalname) // sets the filename using the fieldname
  }
});

export const upload = multer({ storage: storage });

