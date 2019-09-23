const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/authors", {useNewUrlParser: true});

const authorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Your authors name must be at least 3 letters long."], minlength: 3}}, {timestamps: true});

    const Authors = mongoose.model("Authors", authorSchema);
    module.exports = Authors