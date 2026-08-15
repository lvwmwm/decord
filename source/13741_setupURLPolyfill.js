// Module ID: 13741
// Function ID: 13742
// Name: setupURLPolyfill
// Dependencies: [13742, 13743, 13744, 13757]
// Exports: setupURLPolyfill

// Module 13741 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13743).name + "@" + importDefault(13743).version;
  globalThis.URL = require(13744) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13757) /* URLSearchParams */.URLSearchParams;
};
