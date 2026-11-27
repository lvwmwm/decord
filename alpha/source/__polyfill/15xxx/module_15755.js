// Module ID: 15755
// Function ID: 15756
// Dependencies: [15739, 15740, 15756]

// Module 15755
import _mod15739 from "module_15739" /* 15739 */;
import _mod15740 from "module_15740" /* 15740 */;
import _mod15756 from "module_15756" /* 15756 */;

const prop = _mod15739["__core-js_shared__"] || _mod15740("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15756) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
