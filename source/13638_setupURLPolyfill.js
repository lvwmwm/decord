// Module ID: 13638
// Function ID: 13639
// Name: setupURLPolyfill
// Dependencies: [13639, 13640, 13641, 13654]
// Exports: setupURLPolyfill

// Module 13638 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13640).name + "@" + importDefault(13640).version;
  globalThis.URL = require(13641) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13654) /* URLSearchParams */.URLSearchParams;
};
