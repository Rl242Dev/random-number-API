const aws = require('aws-sdk');
const http = require('https');

let configVars = new aws.S3({
  accessKeyId: process.env._RANGE
});
console.log("Hello")