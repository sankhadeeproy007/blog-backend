import mongoose from 'mongoose';

// MOve to env file later
const CONNECTION_URL =
  'mongodb+srv://sankhadeep:sankhadeep@cluster0.plmzk.mongodb.net/blog';

const PORT = process.env.PORT || 5000;

const connectDB = (app) => {
  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log(`Runing on ${PORT}`)))
    .catch(() => 'Error starting server');

  mongoose.set('useFindAndModify', false);
};

export default connectDB;
