// Module ID: 14291
// Function ID: 14292
// Name: setupURLPolyfill
// Dependencies: [14292, 14293, 14294, 14307]
// Exports: setupURLPolyfill

// Module 14291 (setupURLPolyfill)
import _modDef14293 from "module_14293" /* 14293 */;
import BlobModule from "BlobModule" /* 14294 */;
import URLSearchParams from "URLSearchParams" /* 14307 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 14292 */;

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14293.name + "@" + _modDef14293.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};
