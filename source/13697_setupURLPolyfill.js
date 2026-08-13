// Module ID: 13697
// Function ID: 13698
// Name: setupURLPolyfill
// Dependencies: [13698, 13699, 13700, 13713]
// Exports: setupURLPolyfill

// Module 13697 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13699).name + "@" + importDefault(13699).version;
  globalThis.URL = require(13700) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13713) /* URLSearchParams */.URLSearchParams;
};
