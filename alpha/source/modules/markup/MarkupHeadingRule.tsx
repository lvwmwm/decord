// Module ID: 15801
// Function ID: 15802
// Name: MarkupHeadingRule
// Dependencies: [2072, 2]

// Module 15801 (MarkupHeadingRule)
import _mod2072 from "module_2072" /* 2072 */;
import size from "module_2" /* 2 */;

const _modDef2072 = _mod2072;

const re2 = /\n$/;
let obj = {
  requiredFirstCharacters: [" ", "#"],
  match(arg0, allowHeading, str) {
    let tmp = null;
    if (allowHeading.allowHeading) {
      if (null != str) {
        if ("" !== str) {
          tmp = null;
        }
      }
      const obj = _mod2072;
      tmp = obj.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    }
    return tmp;
  }
};
const merged = Object.assign(_modDef2072.defaultRules.heading);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
