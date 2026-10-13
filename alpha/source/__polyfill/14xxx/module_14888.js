// Module ID: 14888
// Function ID: 14889
// Dependencies: [14872, 14873, 14889]

// Module 14888
import _mod14872 from "module_14872" /* 14872 */;
import _mod14873 from "module_14873" /* 14873 */;
import _mod14889 from "module_14889" /* 14889 */;

const prop = _mod14872["__core-js_shared__"] || _mod14873("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod14889) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
