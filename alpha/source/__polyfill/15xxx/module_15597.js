// Module ID: 15597
// Function ID: 15598
// Dependencies: [15581, 15582, 15598]

// Module 15597
import _mod15581 from "module_15581" /* 15581 */;
import _mod15582 from "module_15582" /* 15582 */;
import _mod15598 from "module_15598" /* 15598 */;

const prop = _mod15581["__core-js_shared__"] || _mod15582("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15598) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
