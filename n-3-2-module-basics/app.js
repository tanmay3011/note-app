console.log('Starting app.');

// require file system module
const fs = require('fs');
// require operating system module
const os = require('os');

var user = os.userInfo();

//Old Syntax
//fs.appendFile('greetings.txt', `Hello ${user.username}!`);

console.log(user);

//New Syntax adds a option of a callback
fs.appendFile('greetings.txt', `Hello ${user.username}!`, function (err) {
  if (err) {
    console.log('Error Callback: Unable to write to file')
  }
});

//Alternate way
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
