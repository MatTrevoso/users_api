const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    techs: [String]
})

UserSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('User', UserSchema)