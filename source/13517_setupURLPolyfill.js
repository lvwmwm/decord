// Module ID: 13517
// Function ID: 13518
// Name: setupURLPolyfill
// Dependencies: [13518, 13519, 13520, 13533]
// Exports: setupURLPolyfill

// Module 13517 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13519).name + "@" + importDefault(13519).version;
  globalThis.URL = require(13520) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13533) /* URLSearchParams */.URLSearchParams;
};
