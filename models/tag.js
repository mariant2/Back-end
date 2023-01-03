const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['work', 'lifestyle', 'motor', 'mobile']
    }
});

module.exports = mongoose.model('Tag', tagSchema);