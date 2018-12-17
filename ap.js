const express = require('express');
const bodyParser = require('body-parser');
const extra = require('./routes/extra.route');
const ap = express();
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://userone:a123456@ds041934.mlab.com:41934/carnetextraterrestres';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

ap.use(bodyParser.json());
ap.use(bodyParser.urlencoded({extended: false}));
ap.use('/extras', extra);
let port = 1235;
ap.listen(port, () =>{
	console.log('Server is up and running on port number' + port);
});





