// Module ID: 16489
// Function ID: 16490
// Dependencies: [16473, 16474, 16490]

// Module 16489
import _mod16473 from "module_16473" /* 16473 */;
import _mod16474 from "module_16474" /* 16474 */;
import _mod16490 from "module_16490" /* 16490 */;

const prop = _mod16473["__core-js_shared__"] || _mod16474("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod16490) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
