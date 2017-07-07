var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SavedSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    url: {
        type: String
    }
});

var Saved = mongoose.model("Saved", SavedSchema);
module.exports = Saved;