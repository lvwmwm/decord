// Module ID: 15613
// Function ID: 15614
// Name: MarkupHeadingRule
// Dependencies: [1944, 2]

// Module 15613 (MarkupHeadingRule)
import _mod1944 from "module_1944" /* 1944 */;
import size from "module_2" /* 2 */;

const _modDef1944 = _mod1944;

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
      const obj = _mod1944;
      tmp = obj.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    }
    return tmp;
  }
};
const merged = Object.assign(_modDef1944.defaultRules.heading);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
