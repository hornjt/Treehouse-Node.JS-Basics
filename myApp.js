var profile = require("./myProfile");
var users = process.argv.slice(2);
users.forEach(profile.get);