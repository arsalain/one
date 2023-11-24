import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    name: { type: String },
    urllink: { type: String },
    over: [String],
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trek' }],
    blogs : [{
        title: {
            type: String,
        },
        para: {
            type: String,
        },
        image: {
            type: String,
        },
        imagealt: {
          type: String,
        }
    }]
  },
  { timestamps: true }
)
export default mongoose.model("Blog", BlogSchema);