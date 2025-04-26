import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Yeh CommonJS ka module.exports hata do,
// instead export default karo:
const FormData = mongoose.model("FormData", formSchema);

export default FormData;
