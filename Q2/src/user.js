const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost", // location of the database.
  user: "root",
  password: "password",
  database: "examprepwtp",
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `INSERT INTO message (inputmessage ) values (?)`;
  await connection.queryAsync(sql, [user.inputmessage]);
  //console.log("Done");
  await connection.endAsync();
};

//addUser(user);

const selectUser = async () => {
  const connection = mysql.createConnection(dbinfo); //creating db connection object
  await connection.connectAsync(); //making connection
  let sql = `select * from message`; //query
  let list = await connection.queryAsync(sql, []);
  // console.log(list);
  await connection.endAsync();
  return list;
};

//selectUser();
module.exports = { selectUser, addUser };
