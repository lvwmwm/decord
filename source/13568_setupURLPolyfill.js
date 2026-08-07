// Module ID: 13568
// Function ID: 13569
// Name: setupURLPolyfill
// Dependencies: [13569, 13570, 13571, 13584]
// Exports: setupURLPolyfill

// Module 13568 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13570).name + "@" + importDefault(13570).version;
  globalThis.URL = require(13571) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13584) /* URLSearchParams */.URLSearchParams;
};
