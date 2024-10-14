const mongoose = require("mongoose")


const myBudgetSchema = new mongoose.Schema({
   
    title: {
        type: String,
        trim:true,
        required: true,
        uppercase: true
    },
    budget: {
        type: Number,
        required:true,
        unique: true,
    }
}, { collection: 'myBudget'})


module.exports = mongoose.model('myBudget', myBudgetSchema)