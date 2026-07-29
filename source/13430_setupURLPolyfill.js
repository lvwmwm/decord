// Module ID: 13430
// Function ID: 13431
// Name: setupURLPolyfill
// Dependencies: [13431, 13432, 13433, 13446]
// Exports: setupURLPolyfill

// Module 13430 (setupURLPolyfill)
import get_ActivityIndicator from "get ActivityIndicator";

for (const key10016 in require("BlobModule")) {
  let tmp3 = key10016;
  arg5[key10016] = require("BlobModule")[key10016];
  continue;
}
for (const key10020 in require("URLSearchParams")) {
  let tmp4 = key10020;
  arg5[key10020] = require("URLSearchParams")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13432).name + "@" + importDefault(13432).version;
  globalThis.URL = require(13433) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13446) /* URLSearchParams */.URLSearchParams;
};
