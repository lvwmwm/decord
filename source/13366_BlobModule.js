// Module ID: 13366
// Function ID: 102266
// Name: BlobModule
// Dependencies: [27, 13367]

// Module 13366 (BlobModule)
let closure_0 = null;
const BlobModule = require("get ActivityIndicator").NativeModules.BlobModule;
let tmp2 = BlobModule;
if (BlobModule) {
  tmp2 = "string" === typeof BlobModule.BLOB_URI_SCHEME;
}
if (tmp2) {
  closure_0 = `${BlobModule.BLOB_URI_SCHEME}:`;
  if ("string" === typeof BlobModule.BLOB_URI_HOST) {
    let _HermesInternal = HermesInternal;
    closure_0 = `${BlobModule.BLOB_URI_SCHEME}:` + "//" + BlobModule.BLOB_URI_HOST + "/";
  }
}
require("parseURL").URL.createObjectURL = function createObjectURL(data) {
  if (null === closure_0) {
    const _Error = Error;
    const error = new Error("Cannot create URL for blob!");
    throw error;
  } else {
    const _HermesInternal = HermesInternal;
    return "" + closure_0 + data.data.blobId + "?offset=" + data.data.offset + "&size=" + data.size;
  }
};
require("parseURL").URL.revokeObjectURL = function revokeObjectURL(arg0) {

};

export const URL = require("parseURL").URL;
