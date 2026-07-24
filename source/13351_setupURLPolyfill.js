// Module ID: 13351
// Function ID: 102130
// Name: setupURLPolyfill
// Dependencies: [13352, 13353, 13354, 13367]
// Exports: setupURLPolyfill

// Module 13351 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13353).name + "@" + importDefault(13353).version;
  globalThis.URL = require(13354) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13367) /* URLSearchParams */.URLSearchParams;
};
