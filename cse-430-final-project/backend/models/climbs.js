const mongoose = require('mongoose');

const climbSchema = mongoose.Schema({
    id: String,
    name: String,
    location: String,
    grade: String
})

module.exports = mongoose.model('climbs', climbSchema)