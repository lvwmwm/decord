// Module ID: 13171
// Function ID: 99573
// Name: BlobModule
// Dependencies: []

// Module 13171 (BlobModule)
let closure_0 = null;
const BlobModule = require(dependencyMap[0]).NativeModules.BlobModule;
let tmp2 = BlobModule;
if (BlobModule) {
  tmp2 = "string" === typeof BlobModule.BLOB_URI_SCHEME;
}
if (tmp2) {
  closure_0 = `${BlobModule.BLOB_URI_SCHEME}:`;
  if ("string" === typeof BlobModule.BLOB_URI_HOST) {
    const _HermesInternal = HermesInternal;
    closure_0 = `${BlobModule.BLOB_URI_SCHEME}:` + "//" + BlobModule.BLOB_URI_HOST + "/";
  }
}
require(dependencyMap[1]).URL.createObjectURL = function createObjectURL(data) {
  if (null === closure_0) {
    const _Error = Error;
    const error = new Error("Cannot create URL for blob!");
    throw error;
  } else {
    const _HermesInternal = HermesInternal;
    return "" + closure_0 + data.data.blobId + "?offset=" + data.data.offset + "&size=" + data.size;
  }
};
require(dependencyMap[1]).URL.revokeObjectURL = function revokeObjectURL(arg0) {

};

export const URL = require(dependencyMap[1]).URL;
