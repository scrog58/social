import * as mongoose from 'mongoose';

interface User extends mongoose.Document{
  username: string,
  password: string
}

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model<User>('User', userSchema);
