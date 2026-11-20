// Module ID: 16765
// Function ID: 16766
// Dependencies: [16749, 16750, 16766]

// Module 16765
import _mod16749 from "module_16749" /* 16749 */;
import _mod16750 from "module_16750" /* 16750 */;
import _mod16766 from "module_16766" /* 16766 */;

const prop = _mod16749["__core-js_shared__"] || _mod16750("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod16766) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
