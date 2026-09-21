// Module ID: 14596
// Function ID: 14597
// Dependencies: [14580, 14581, 14597]

// Module 14596
import _mod14580 from "module_14580" /* 14580 */;
import _mod14581 from "module_14581" /* 14581 */;
import _mod14597 from "module_14597" /* 14597 */;

let prop = _mod14580["__core-js_shared__"];
if (!prop) {
  prop = _mod14581("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14597) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
