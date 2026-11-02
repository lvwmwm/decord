// Module ID: 16144
// Function ID: 16145
// Dependencies: [16128, 16129, 16145]

// Module 16144
import _mod16128 from "module_16128" /* 16128 */;
import _mod16129 from "module_16129" /* 16129 */;
import _mod16145 from "module_16145" /* 16145 */;

const prop = _mod16128["__core-js_shared__"] || _mod16129("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod16145) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
