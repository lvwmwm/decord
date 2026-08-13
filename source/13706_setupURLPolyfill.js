// Module ID: 13706
// Function ID: 13707
// Name: setupURLPolyfill
// Dependencies: [13707, 13708, 13709, 13722]
// Exports: setupURLPolyfill

// Module 13706 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13708).name + "@" + importDefault(13708).version;
  globalThis.URL = require(13709) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13722) /* URLSearchParams */.URLSearchParams;
};
