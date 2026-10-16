// Module ID: 15267
// Function ID: 15268
// Dependencies: [15251, 15252, 15268]

// Module 15267
import _mod15251 from "module_15251" /* 15251 */;
import _mod15252 from "module_15252" /* 15252 */;
import _mod15268 from "module_15268" /* 15268 */;

const prop = _mod15251["__core-js_shared__"] || _mod15252("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15268) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
