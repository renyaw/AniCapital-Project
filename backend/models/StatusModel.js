import mongoose from "mongoose";

const StatusSchema = new mongoose.Schema({
    proses: {
        type: String,
        required: true,
        unique: true,
    },
});

export default mongoose.model("Status", StatusSchema);