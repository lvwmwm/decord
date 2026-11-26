// Module ID: 7092
// Function ID: 7093
// Name: MarkupHeadingRule
// Dependencies: [2069, 2]

// Module 7092 (MarkupHeadingRule)
import _mod2069 from "module_2069" /* 2069 */;
import size from "module_2" /* 2 */;

const _modDef2069 = _mod2069;

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
      const obj = _mod2069;
      tmp = obj.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    }
    return tmp;
  }
};
const merged = Object.assign(_modDef2069.defaultRules.heading);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
