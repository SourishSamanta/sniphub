const mongoose = require("mongoose");

const SnippetSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        code: { type: String, required: true },
        language: { type: String, required: true },
        userId: { type: String, required: true }, // Clerk user ID
        isPublic: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Snippet", SnippetSchema);

