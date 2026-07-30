// Module ID: 13425
// Function ID: 13426
// Name: setupURLPolyfill
// Dependencies: [13426, 13427, 13428, 13441]
// Exports: setupURLPolyfill

// Module 13425 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13427).name + "@" + importDefault(13427).version;
  globalThis.URL = require(13428) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13441) /* URLSearchParams */.URLSearchParams;
};
