// Module ID: 15560
// Function ID: 15561
// Dependencies: [15544, 15545, 15561]

// Module 15560
import _mod15544 from "module_15544" /* 15544 */;
import _mod15545 from "module_15545" /* 15545 */;
import _mod15561 from "module_15561" /* 15561 */;

const prop = _mod15544["__core-js_shared__"] || _mod15545("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15561) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
