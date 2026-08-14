// Module ID: 13657
// Function ID: 13658
// Name: __core-js_shared__
// Dependencies: [13641, 13642, 13658]

// Module 13657 (__core-js_shared__)
import { "\"__core-js_shared__\"" as __core_js_shared__ } from "module_13641";

if (!__core_js_shared__) {
  __core_js_shared__ = require("module_13642")("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (require("module_13658")) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;
