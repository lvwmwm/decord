// Module ID: 13554
// Function ID: 13555
// Name: setupURLPolyfill
// Dependencies: [13555, 13556, 13557, 13570]
// Exports: setupURLPolyfill

// Module 13554 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13556).name + "@" + importDefault(13556).version;
  globalThis.URL = require(13557) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13570) /* URLSearchParams */.URLSearchParams;
};
