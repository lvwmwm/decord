// Module ID: 14634
// Function ID: 14635
// Dependencies: [14618, 14619, 14635]

// Module 14634
import _mod14618 from "module_14618" /* 14618 */;
import _mod14619 from "module_14619" /* 14619 */;
import _mod14635 from "module_14635" /* 14635 */;

let prop = _mod14618["__core-js_shared__"];
if (!prop) {
  prop = _mod14619("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14635) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
