const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bpdch@rzt29",
  database: "webpage",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

function Sign_Up(Username, Password) {}
function SignIn(Username, Password) {}
