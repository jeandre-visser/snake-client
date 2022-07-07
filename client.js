const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // Print a message to screen when connection is successfully established
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: JPV');
  })

  conn.on('data', data => {
    console.log(data);
  })
  return conn;
};

module.exports = { connect };

// setTimeout(() => {
//   conn.write('Move: up');
// }, 1000)

// setTimeout(() => {
//   conn.write('Move: left');
// }, 1500)

// setTimeout(() => {
//   conn.write('Move: left');
// }, 2000)

// setTimeout(() => {
//   conn.write('Move: down');
// }, 2500)

// setTimeout(() => {
//   conn.write('Move: right');
// }, 3000)

// conn.on('connect', () => {
// setInterval(() => {
//   conn.write('Move: up')
// }, 50)
// });