import mongoose from "mongoose";
const EnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
        type: String,
    },
    message: {
        type: String,
    },
    callback:{
      type: String,
  },
  },
  { timestamps: true }
);

export default mongoose.model("Enquiry", EnquirySchema);