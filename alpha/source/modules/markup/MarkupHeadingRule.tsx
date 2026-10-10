// Module ID: 14034
// Function ID: 14035
// Name: MarkupHeadingRule
// Dependencies: [1949, 2]

// Module 14034 (MarkupHeadingRule)
import _mod1949 from "module_1949" /* 1949 */;
import size from "module_2" /* 2 */;

const _modDef1949 = _mod1949;

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
      const obj = _mod1949;
      tmp = obj.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    }
    return tmp;
  }
};
const merged = Object.assign(_modDef1949.defaultRules.heading);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
