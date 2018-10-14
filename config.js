require('dotenv').load();

var filepath = __dirname + "/static/";
var uri = "mongodb+srv://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASS + "@osscl-vbdci.mongodb.net/oss-workshop";

module.exports = {

    filepath: filepath,
    uri: uri

};