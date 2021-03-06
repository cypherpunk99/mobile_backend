import mongoose, { Schema } from 'mongoose';

var personSchema = Schema({
  oauth_id: {
    type: String,
    unique: true,
    index: true,
  },
  platform: String,
  token: String,
  name: String,
  avatar: String,
  age: String,
  phoneNumber: String,
  about: String,
  work: Object,
  university: Object,
  current_work: String,
  current_university: String,
  gender: Number,  //  1 - женский, 2 - мужской, 0 - без указания пола. 
  events: [{ type: Schema.Types.ObjectId, ref: 'DateEvent' }],
  likes: Object,
  matches: Array, //[{ type: Schema.ObjectId, ref: 'Person' }],  
  table: Number
});

var Person = mongoose.model('Person', personSchema);

export default Person