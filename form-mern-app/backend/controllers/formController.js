import FormData from "../models/FormData.js";
const submitForm = async (req, res) => {
  try {
    const form = await FormData.create(req.body);
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
export default submitForm;
