// Module ID: 16139
// Function ID: 16140
// Dependencies: [16123, 16124, 16140]

// Module 16139
import _mod16123 from "module_16123" /* 16123 */;
import _mod16124 from "module_16124" /* 16124 */;
import _mod16140 from "module_16140" /* 16140 */;

const prop = _mod16123["__core-js_shared__"] || _mod16124("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod16140) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
