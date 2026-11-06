// Module ID: 15908
// Function ID: 15909
// Name: MarkupHeadingRule
// Dependencies: [2067, 2]

// Module 15908 (MarkupHeadingRule)
import _mod2067 from "module_2067" /* 2067 */;
import size from "module_2" /* 2 */;

const _modDef2067 = _mod2067;

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
      const obj = _mod2067;
      tmp = obj.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    }
    return tmp;
  }
};
const merged = Object.assign(_modDef2067.defaultRules.heading);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
