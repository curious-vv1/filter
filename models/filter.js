const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const filterSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    company: {
        type:String,
        required:true
    }
});


const Filter = mongoose.model('filter',filterSchema);
module.exports = Filter;
