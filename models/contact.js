require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const query = mongoose.model('query', {
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Email: {
        type: String,
    },
    Contact: {
        type: Number
    },
    Query: {
        type: String
    }
})

module.exports = query;