// Module ID: 16487
// Function ID: 16488
// Dependencies: [16471, 16472, 16488]

// Module 16487
import _mod16471 from "module_16471" /* 16471 */;
import _mod16472 from "module_16472" /* 16472 */;
import _mod16488 from "module_16488" /* 16488 */;

const prop = _mod16471["__core-js_shared__"] || _mod16472("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod16488) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
