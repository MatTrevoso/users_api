const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const UserSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    age: Number,
    avatar_url: String,
    techs: [String],
})

UserSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('User', UserSchema)