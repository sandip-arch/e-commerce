const mpongoose = require('mongoose');
const userSchema = new mpongoose.Schema(
    {
 userName: {type: String, required: true, lowercase: true },
    email: {type: String, required: true, unique: true},
    phone: {type: Number, },
    password: {type: String, required: true},
    address: {type: String, required: true},
    pinCode: {type: Number, required: true},
    nearestLandmark: {type: String, required: true},
     gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender category',
    lowercase: true,
    trim: true      
  }
}
}
);

module.exports = mpongoose.model('User', userSchema);





