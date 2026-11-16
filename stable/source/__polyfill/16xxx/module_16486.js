// Module ID: 16486
// Function ID: 16487
// Dependencies: [16470, 16471, 16487]

// Module 16486
import _mod16470 from "module_16470" /* 16470 */;
import _mod16471 from "module_16471" /* 16471 */;
import _mod16487 from "module_16487" /* 16487 */;

const prop = _mod16470["__core-js_shared__"] || _mod16471("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod16487) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
