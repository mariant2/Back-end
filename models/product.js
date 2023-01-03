const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseTextSearch = require('mongoose-text-search');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['find', 'sell']
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true,
        enum: ['work', 'lifestyle', 'motor', 'mobile']
    }]
});

productSchema.plugin(mongoosePaginate);
productSchema.plugin(mongooseTextSearch);

module.exports = mongoose.model('Product', productSchema);