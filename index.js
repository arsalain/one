import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import TrekRoute from "./Routes/Trek.js"
import UserRoute from "./Routes/User.js"
import BookRoute from "./Routes/Book.js"
import DestRoute from "./Routes/Dest.js"
import MemberRoute from "./Routes/Member.js"
import BlogRoute from "./Routes/Blog.js"
import EnqRoute from "./Routes/Enquiry.js"
import bodyParser from "body-parser";
import cors from "cors";
import { createRequire } from 'module';

// const require = createRequire(import.meta.url);

// delete require.cache[require.resolve('./Controllers/book.js')];

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb")
    }catch(error){
        throw error;
    }
};

app.use(cors())
// app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use("/uploads",express.static('uploads'))
app.use("/trek", TrekRoute);
app.use("/auth",UserRoute)
app.use("/book",BookRoute );
app.use("/dest", DestRoute);
app.use("/member", MemberRoute);
app.use("/blog", BlogRoute);
app.use("/enquiry", EnqRoute);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });

  const port = process.env.PORT || 4000; 
  app.listen(port, ()=>{
      connect();
      console.log(`Connected to backend at port ${port}`)
  });

  app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })