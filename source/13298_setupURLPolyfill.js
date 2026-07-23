// Module ID: 13298
// Function ID: 101803
// Name: setupURLPolyfill
// Dependencies: [13299, 13300, 13301, 13314]
// Exports: setupURLPolyfill

// Module 13298 (setupURLPolyfill)
import get_ActivityIndicator from "get ActivityIndicator";

for (const key10019 in require("BlobModule")) {
  let tmp3 = key10019;
  arg5[key10019] = require("BlobModule")[key10019];
  continue;
}
for (const key10024 in require("URLSearchParams")) {
  let tmp4 = key10024;
  arg5[key10024] = require("URLSearchParams")[key10024];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13300).name + "@" + importDefault(13300).version;
  globalThis.URL = require(13301) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13314) /* URLSearchParams */.URLSearchParams;
};
