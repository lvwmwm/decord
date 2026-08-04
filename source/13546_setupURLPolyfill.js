// Module ID: 13546
// Function ID: 13547
// Name: setupURLPolyfill
// Dependencies: [13547, 13548, 13549, 13562]
// Exports: setupURLPolyfill

// Module 13546 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13548).name + "@" + importDefault(13548).version;
  globalThis.URL = require(13549) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13562) /* URLSearchParams */.URLSearchParams;
};
