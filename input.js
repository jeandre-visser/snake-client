const { move_keys, message } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  if (key === '\u0003') process.exit();
  if (move_keys[key]) connection.write('Move: ' + move_keys[key]);
  if (message[key]) connection.write(`Say: ${message[key]}`);
};


module.exports = { setupInput };