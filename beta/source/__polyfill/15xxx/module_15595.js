// Module ID: 15595
// Function ID: 15596
// Dependencies: [15579, 15580, 15596]

// Module 15595
import _mod15579 from "module_15579" /* 15579 */;
import _mod15580 from "module_15580" /* 15580 */;
import _mod15596 from "module_15596" /* 15596 */;

const prop = _mod15579["__core-js_shared__"] || _mod15580("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15596) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
