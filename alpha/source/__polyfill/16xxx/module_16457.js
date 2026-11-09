// Module ID: 16457
// Function ID: 16458
// Dependencies: [16441, 16442, 16458]

// Module 16457
import _mod16441 from "module_16441" /* 16441 */;
import _mod16442 from "module_16442" /* 16442 */;
import _mod16458 from "module_16458" /* 16458 */;

const prop = _mod16441["__core-js_shared__"] || _mod16442("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod16458) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
