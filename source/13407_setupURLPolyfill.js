// Module ID: 13407
// Function ID: 102435
// Name: setupURLPolyfill
// Dependencies: [13408, 13409, 13410, 13423]
// Exports: setupURLPolyfill

// Module 13407 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13409).name + "@" + importDefault(13409).version;
  globalThis.URL = require(13410) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13423) /* URLSearchParams */.URLSearchParams;
};
