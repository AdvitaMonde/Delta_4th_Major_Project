const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true   
    },
    description:{
        type:String,
        },
    image:{
        type:String,
        /*default: "https://thumbs.dreamstime.com/b/ocean-beach-sunrise-colorful-75364306.jpg",*/
        set:(v) => v === "" ? "https://thumbs.dreamstime.com/b/ocean-beach-sunrise-colorful-75364306.jpg" : v,
    },
    price:Number,
    location:String,
    country:{
        type:String,
        required:true
    },
});


const List = mongoose.model("Listing", listingSchema);
module.exports = List;

