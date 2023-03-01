
const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");

const pructSchema= new mongoose({
    id: Number,
    name: {
        type: String,
        require:true
    },
    description: String,
    price: Number,
    images: String
}
);
    
module.exports = mongo.Schema('product', pructSchema)
