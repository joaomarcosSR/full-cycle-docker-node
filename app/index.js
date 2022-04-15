const express = require("express");
const random_name = require("node-random-name");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);
const sqlCreateTable =
  "CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))";
connection.query(sqlCreateTable);

app.get("/", (req, res) => {
  const name = random_name();
  const sqlAddPerson = `INSERT INTO people(name) values('${name}')`;
  connection.query(sqlAddPerson);
  res.send(`<h1>Full Cycle Rocks!</h1></br>${name}`);
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
