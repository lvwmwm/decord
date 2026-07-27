// Module ID: 13363
// Function ID: 102262
// Name: setupURLPolyfill
// Dependencies: [13364, 13365, 13366, 13379]
// Exports: setupURLPolyfill

// Module 13363 (setupURLPolyfill)
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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(13365).name + "@" + importDefault(13365).version;
  globalThis.URL = require(13366) /* BlobModule */.URL;
  globalThis.URLSearchParams = require(13379) /* URLSearchParams */.URLSearchParams;
};
