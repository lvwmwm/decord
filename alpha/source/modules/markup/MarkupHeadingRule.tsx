// Module ID: 13887
// Function ID: 13888
// Name: MarkupHeadingRule
// Dependencies: [1948, 2]

// Module 13887 (MarkupHeadingRule)
import _mod1948 from "module_1948" /* 1948 */;
import size from "module_2" /* 2 */;

const _modDef1948 = _mod1948;

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
      const obj = _mod1948;
      tmp = obj.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    }
    return tmp;
  }
};
const merged = Object.assign(_modDef1948.defaultRules.heading);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
