// Module ID: 15562
// Function ID: 15563
// Dependencies: [15546, 15547, 15563]

// Module 15562
import _mod15546 from "module_15546" /* 15546 */;
import _mod15547 from "module_15547" /* 15547 */;
import _mod15563 from "module_15563" /* 15563 */;

const prop = _mod15546["__core-js_shared__"] || _mod15547("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15563) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
