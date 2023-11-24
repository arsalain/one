import Enq from "../Model/Enquiry.js"


export const postEnquiry = async (req, res, next) => {
    try {
      const { name, email, phone, password, message, callback } = req.body;
  
      const newEnquiry = new Enq({ name, email, phone, password, message, callback });
      await newEnquiry.save();
  
      res.status(201).send(newEnquiry);
    } catch (error) {
      res.status(400).send(error);
    }
  }
export const getEnquiry = async (req, res, next) => {
try {
    const users = await Enq.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}