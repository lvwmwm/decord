// Module ID: 5237
// Function ID: 5238
// Name: MarkupHeadingRule
// Dependencies: [1933, 2]

// Module 5237 (MarkupHeadingRule)
import _mod1933 from "module_1933" /* 1933 */;

const _modDef1933 = _mod1933;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(_modDef1933.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== str) {
        tmp = null;
      }
    }
    tmp = _mod1933.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
