// Module ID: 16484
// Function ID: 16485
// Dependencies: [16468, 16469, 16485]

// Module 16484
import _mod16468 from "module_16468" /* 16468 */;
import _mod16469 from "module_16469" /* 16469 */;
import _mod16485 from "module_16485" /* 16485 */;

const prop = _mod16468["__core-js_shared__"] || _mod16469("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod16485) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
