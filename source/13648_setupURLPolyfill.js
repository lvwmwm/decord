// Module ID: 13648
// Function ID: 13649
// Name: setupURLPolyfill
// Dependencies: [13649, 13650, 13651, 13664]
// Exports: setupURLPolyfill

// Module 13648 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13650).name + "@" + importDefault(13650).version;
  globalThis.URL = require(13651) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13664) /* URLSearchParams */.URLSearchParams;
};
