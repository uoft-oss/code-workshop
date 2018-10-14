require('dotenv').load();

var filepath = __dirname + "/static/";
var uri = "mongodb+srv://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASS + "@art-of-guessing-gdqip.mongodb.net/art-of-guessing";

module.exports = {

    filepath: filepath,
    uri: uri

};