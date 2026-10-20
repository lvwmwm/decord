// Module ID: 14572
// Function ID: 14573
// Dependencies: [14556, 14557, 14573]

// Module 14572
import _mod14556 from "module_14556" /* 14556 */;
import _mod14557 from "module_14557" /* 14557 */;
import _mod14573 from "module_14573" /* 14573 */;

const prop = _mod14556["__core-js_shared__"] || _mod14557("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod14573) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
