const mongoose = require("mongoose");

const Calendar = mongoose.model('Calendar', 
    { date: {
      type: String,
      required: true,
      trim: true
      }, 
      time: {
      type: String,
      required: true,
      trim : true} 
    }); 

module.exports = Calendar