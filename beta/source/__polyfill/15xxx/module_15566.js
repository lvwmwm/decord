// Module ID: 15566
// Function ID: 15567
// Dependencies: [15550, 15551, 15567]

// Module 15566
import _mod15550 from "module_15550" /* 15550 */;
import _mod15551 from "module_15551" /* 15551 */;
import _mod15567 from "module_15567" /* 15567 */;

const prop = _mod15550["__core-js_shared__"] || _mod15551("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15567) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
