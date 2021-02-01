const mongoose = require('mongoose');

const BrandSchema = mongoose.Schema({
    brand: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model('Brands', BrandSchema);