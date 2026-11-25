// Module ID: 15697
// Function ID: 15698
// Dependencies: [15681, 15682, 15698]

// Module 15697
import _mod15681 from "module_15681" /* 15681 */;
import _mod15682 from "module_15682" /* 15682 */;
import _mod15698 from "module_15698" /* 15698 */;

const prop = _mod15681["__core-js_shared__"] || _mod15682("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15698) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
