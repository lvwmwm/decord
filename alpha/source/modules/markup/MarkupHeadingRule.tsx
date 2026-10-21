// Module ID: 14968
// Function ID: 14969
// Name: MarkupHeadingRule
// Dependencies: [1951, 2]

// Module 14968 (MarkupHeadingRule)
import _mod1951 from "module_1951" /* 1951 */;
import size from "module_2" /* 2 */;

const _modDef1951 = _mod1951;

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
      const obj = _mod1951;
      tmp = obj.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    }
    return tmp;
  }
};
const merged = Object.assign(_modDef1951.defaultRules.heading);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
