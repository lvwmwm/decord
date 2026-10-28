// Module ID: 15823
// Function ID: 15824
// Dependencies: [15807, 15808, 15824]

// Module 15823
import _mod15807 from "module_15807" /* 15807 */;
import _mod15808 from "module_15808" /* 15808 */;
import _mod15824 from "module_15824" /* 15824 */;

const prop = _mod15807["__core-js_shared__"] || _mod15808("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15824) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
