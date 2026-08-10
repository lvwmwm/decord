// Module ID: 13640
// Function ID: 13641
// Name: setupURLPolyfill
// Dependencies: [13641, 13642, 13643, 13656]
// Exports: setupURLPolyfill

// Module 13640 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13642).name + "@" + importDefault(13642).version;
  globalThis.URL = require(13643) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13656) /* URLSearchParams */.URLSearchParams;
};
