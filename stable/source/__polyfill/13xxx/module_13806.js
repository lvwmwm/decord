// Module ID: 13806
// Function ID: 13807
// Dependencies: [13790, 13791, 13807]

// Module 13806
import _mod13790 from "module_13790" /* 13790 */;
import _mod13791 from "module_13791" /* 13791 */;
import _mod13807 from "module_13807" /* 13807 */;

const prop = _mod13790["__core-js_shared__"] || _mod13791("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod13807) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
