// Module ID: 16140
// Function ID: 16141
// Dependencies: [16124, 16125, 16141]

// Module 16140
import _mod16124 from "module_16124" /* 16124 */;
import _mod16125 from "module_16125" /* 16125 */;
import _mod16141 from "module_16141" /* 16141 */;

const prop = _mod16124["__core-js_shared__"] || _mod16125("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod16141) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
