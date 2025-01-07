const  mongoose  = require("mongoose");

const mongodbUrl = "mongodb+srv://kusekarrushikesh45:fu3NDxzJzVf5qTPC@cluster0.f4w7d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB(){
    return mongoose.connect(mongodbUrl)

}

module.exports = connectDB 