// Module ID: 16376
// Function ID: 16377
// Dependencies: [16360, 16361, 16377]

// Module 16376
import _mod16360 from "module_16360" /* 16360 */;
import _mod16361 from "module_16361" /* 16361 */;
import _mod16377 from "module_16377" /* 16377 */;

const prop = _mod16360["__core-js_shared__"] || _mod16361("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod16377) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
