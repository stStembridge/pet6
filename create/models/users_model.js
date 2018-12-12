var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    color: String,
    toy: String,
    breed: String,
    treat: String,
    hashed_password: String
});
mongoose.model('User', UserSchema);