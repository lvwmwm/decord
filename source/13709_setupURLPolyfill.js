// Module ID: 13709
// Function ID: 13710
// Name: setupURLPolyfill
// Dependencies: [13710, 13711, 13712, 13725]
// Exports: setupURLPolyfill

// Module 13709 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13711).name + "@" + importDefault(13711).version;
  globalThis.URL = require(13712) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13725) /* URLSearchParams */.URLSearchParams;
};
