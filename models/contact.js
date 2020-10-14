const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://admin_ripu:xSjDMwjvb5qd1tyf@cluster1.y3gpy.mongodb.net/query", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
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