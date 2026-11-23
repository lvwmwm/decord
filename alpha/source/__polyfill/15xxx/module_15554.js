// Module ID: 15554
// Function ID: 15555
// Dependencies: [15538, 15539, 15555]

// Module 15554
import _mod15538 from "module_15538" /* 15538 */;
import _mod15539 from "module_15539" /* 15539 */;
import _mod15555 from "module_15555" /* 15555 */;

const prop = _mod15538["__core-js_shared__"] || _mod15539("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15555) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
