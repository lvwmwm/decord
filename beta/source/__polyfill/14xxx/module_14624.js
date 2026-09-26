// Module ID: 14624
// Function ID: 14625
// Dependencies: [14608, 14609, 14625]

// Module 14624
import _mod14608 from "module_14608" /* 14608 */;
import _mod14609 from "module_14609" /* 14609 */;
import _mod14625 from "module_14625" /* 14625 */;

let prop = _mod14608["__core-js_shared__"];
if (!prop) {
  prop = _mod14609("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14625) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
