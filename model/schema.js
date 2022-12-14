const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data = new Schema({
    name:{
        type: 'string',
        required: true
    },
    phno: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    tenth: {
        type: 'string',
        required: true
    },
    twelve: {
        type: 'string',
        required: true
    }
},{timestamps: true});

const ldata = mongoose.model("ldata",data);
module.exports = ldata;