// Module ID: 16399
// Function ID: 16400
// Dependencies: [16383, 16384, 16400]

// Module 16399
import _mod16383 from "module_16383" /* 16383 */;
import _mod16384 from "module_16384" /* 16384 */;
import _mod16400 from "module_16400" /* 16400 */;

const prop = _mod16383["__core-js_shared__"] || _mod16384("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod16400) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
