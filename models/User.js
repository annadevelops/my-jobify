import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please provide name"], trim: true },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 6,
  },
  lastName: {
    type: String,
    trim: true,
    default: "jones",
  },
  location: {
    type: String,
    trim: true,
    default: "my city",
  },
});

export default mongoose.model("User", UserSchema);
