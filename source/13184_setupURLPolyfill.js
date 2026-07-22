// Module ID: 13184
// Function ID: 99647
// Name: setupURLPolyfill
// Dependencies: []
// Exports: setupURLPolyfill

// Module 13184 (setupURLPolyfill)
const _module = require(dependencyMap[0]);
for (const key10019 in arg1(arg6[2])) {
  let tmp3 = key10019;
  arg5[key10019] = arg1(arg6[2])[key10019];
}
for (const key10024 in arg1(arg6[3])) {
  let tmp4 = key10024;
  arg5[key10024] = arg1(arg6[3])[key10024];
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + importDefault(dependencyMap[1]).name + "@" + importDefault(dependencyMap[1]).version;
  globalThis.URL = require(dependencyMap[2]).URL;
  globalThis.URLSearchParams = require(dependencyMap[3]).URLSearchParams;
};
