const GraphQLUpload = require("./GraphQLUpload.js");
const graphqlUploadExpress = require("./graphqlUploadExpress.js");
const graphqlUploadKoa = require("./graphqlUploadKoa.js");
const processRequest = require("./processRequest.js");
const Upload = require("./Upload.js");


module.exports = {
  GraphQLUpload,
  Upload,
  graphqlUploadExpress,
  graphqlUploadKoa,
  processRequest,
  Upload
}