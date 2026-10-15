// Module ID: 15222
// Function ID: 15223
// Dependencies: [15206, 15207, 15223]

// Module 15222
import _mod15206 from "module_15206" /* 15206 */;
import _mod15207 from "module_15207" /* 15207 */;
import _mod15223 from "module_15223" /* 15223 */;

const prop = _mod15206["__core-js_shared__"] || _mod15207("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod15223) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
