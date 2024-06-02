import mongoose from "mongoose";

const Status = new mongoose.Schema({
    proses: {
        type: String,
        required: true,
        unique: true,
    },
});

export default mongoose.model("Status", Status);