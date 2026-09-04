// Module ID: 14239
// Function ID: 14240
// Name: __core-js_shared__
// Dependencies: [14223, 14224, 14240]

// Module 14239 (__core-js_shared__)
import _mod14223 from "module_14223" /* 14223 */;
import _mod14224 from "module_14224" /* 14224 */;
import _mod14240 from "module_14240" /* 14240 */;

__core_js_shared__ = _mod14223["__core-js_shared__"];
if (!__core_js_shared__) {
  __core_js_shared__ = _mod14224("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14240) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;
