// Module ID: 13116
// Function ID: 99455
// Name: __core-js_shared__
// Dependencies: []

// Module 13116 (__core-js_shared__)
__core-js_shared__ = require(dependencyMap[0]).__core-js_shared__;
if (!__core_js_shared__) {
  __core-js_shared__ = require(dependencyMap[1])("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
const obj = {};
let str2 = "global";
if (require(dependencyMap[2])) {
  str2 = "pure";
}
obj.mode = str2;
versions.push(obj);

export default __core_js_shared__;
