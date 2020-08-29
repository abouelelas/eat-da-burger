// Set up MySQL connection.
var mysql = require("mysql");
var jawsSql = process.env.JAWSDB_URL;
var connection = null;
if (typeof jawsSql === 'undefined' || jawsSql.length === 0){
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootpassword",
  database: "burgers_db"
});
}
else {
  connection = mysql.createConnection(jawsSql);
}
console.log("Test");
console.log(jawsSql)
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
