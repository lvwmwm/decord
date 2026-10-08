// Module ID: 14394
// Function ID: 14395
// Dependencies: [14378, 14379, 14395]

// Module 14394
import _mod14378 from "module_14378" /* 14378 */;
import _mod14379 from "module_14379" /* 14379 */;
import _mod14395 from "module_14395" /* 14395 */;

const prop = _mod14378["__core-js_shared__"] || _mod14379("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod14395) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
