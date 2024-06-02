import mongoose from "mongoose";

const AnimeSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    episode: {
        type: String,
        required: true,
    },

});

export default mongoose.model("Anime", AnimeSchema);