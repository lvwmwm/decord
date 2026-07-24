// Module ID: 13299
// Function ID: 102016
// Name: __core-js_shared__
// Dependencies: [13283, 13284, 13300]

// Module 13299 (__core-js_shared__)
import { "\"__core-js_shared__\"" as __core_js_shared__ } from "check";

if (!__core_js_shared__) {
  __core_js_shared__ = require("check")("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
const obj = { version: "3.41.0", mode: null, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" };
let str2 = "global";
if (require("module_13300")) {
  str2 = "pure";
}
obj.mode = str2;
versions.push(obj);

export default __core_js_shared__;
