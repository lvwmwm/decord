// Module ID: 15458
// Function ID: 15459
// Dependencies: [15442, 15443, 15459]

// Module 15458
import _mod15442 from "module_15442" /* 15442 */;
import _mod15443 from "module_15443" /* 15443 */;
import _mod15459 from "module_15459" /* 15459 */;

const prop = _mod15442["__core-js_shared__"] || _mod15443("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15459) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
