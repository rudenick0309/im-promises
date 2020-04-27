const util = require("util");
const request = require("request");

const {
  getDataFromFile,
  getBodyFromGetRequest
} = require("../exercises/01_callBack");

const getDataFromFilePromise = util.promisify(getDataFromFile)

const getBodyFromGetRequestPromise = util.promisify(getBodyFromGetRequest)

module.exports = {
  getDataFromFilePromise,
  getBodyFromGetRequestPromise
};
