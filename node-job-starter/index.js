const request = require("request");
const dotenv = require("dotenv").config();
const sendMail = require("./utils/send-mail").sendMail;

const getUsers = () => {
  var options = {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    headers: {
      'content-type': 'application/json'
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    sendMail();
    console.log(body);
  });
}

getUsers();
