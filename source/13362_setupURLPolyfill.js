// Module ID: 13362
// Function ID: 102257
// Name: setupURLPolyfill
// Dependencies: [13363, 13364, 13365, 13378]
// Exports: setupURLPolyfill

// Module 13362 (setupURLPolyfill)
import get_ActivityIndicator from "get ActivityIndicator";

for (const key10019 in require("BlobModule")) {
  let tmp3 = key10019;
  arg5[key10019] = require("BlobModule")[key10019];
  continue;
}
for (const key10024 in require("URLSearchParams")) {
  let tmp4 = key10024;
  arg5[key10024] = require("URLSearchParams")[key10024];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13364).name + "@" + importDefault(13364).version;
  globalThis.URL = require(13365) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13378) /* URLSearchParams */.URLSearchParams;
};
