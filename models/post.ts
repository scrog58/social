import * as mongoose from 'mongoose';

interface Post extends mongoose.Document {
  userId: string,
  username: string,
  content: string,
  dateCreated: string
}

let postSchema = new mongoose.Schema({
  userId: String,
  username: String,
  content: String,
  dateCreated: String
});

export default mongoose.model<Post>('Post', postSchema);
