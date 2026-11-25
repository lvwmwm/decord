// Module ID: 15055
// Function ID: 15056
// Name: MarkupHeadingRule
// Dependencies: [2068, 2]

// Module 15055 (MarkupHeadingRule)
import _mod2068 from "module_2068" /* 2068 */;
import size from "module_2" /* 2 */;

const _modDef2068 = _mod2068;

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
      const obj = _mod2068;
      tmp = obj.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    }
    return tmp;
  }
};
const merged = Object.assign(_modDef2068.defaultRules.heading);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
