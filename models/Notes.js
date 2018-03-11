const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: 'Kindly enter the title of the note',
    },
    content: {
        type: String,
        required: 'Kindly enter the content of the note',
    },
});

module.exports = mongoose.model('Notes', NoteSchema);