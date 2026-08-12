// Module ID: 13705
// Function ID: 13706
// Name: setupURLPolyfill
// Dependencies: [13706, 13707, 13708, 13721]
// Exports: setupURLPolyfill

// Module 13705 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13707).name + "@" + importDefault(13707).version;
  globalThis.URL = require(13708) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13721) /* URLSearchParams */.URLSearchParams;
};
