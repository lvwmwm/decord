// Module ID: 13804
// Function ID: 13805
// Dependencies: [13788, 13789, 13805]

// Module 13804
import _mod13788 from "module_13788" /* 13788 */;
import _mod13789 from "module_13789" /* 13789 */;
import _mod13805 from "module_13805" /* 13805 */;

const prop = _mod13788["__core-js_shared__"] || _mod13789("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod13805) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
