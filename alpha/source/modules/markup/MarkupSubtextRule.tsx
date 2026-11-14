// Module ID: 9358
// Function ID: 9359
// Name: MarkupSubtextRule
// Dependencies: [2070, 2]

// Module 9358 (MarkupSubtextRule)
import _mod2070 from "module_2070" /* 2070 */;
import size from "module_2" /* 2 */;

const _modDef2070 = _mod2070;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
let obj = {
  order: _modDef2070.defaultRules.heading.order,
  requiredFirstCharacters: ["-"],
  match(arg0, allowSubtext, str) {
    let tmp = null;
    if (false !== allowSubtext.allowSubtext) {
      if (null != str) {
        let tmp4;
        if ("" !== str) {
          tmp4 = null;
        }
        tmp = tmp4;
      }
      const obj = _mod2070;
      tmp4 = obj.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, arg1, arg2) {
    let obj2;
    let parseInline;
    let trimmed;
    const obj = { content: parseInline(arg1, trimmed, obj2) };
    parseInline = _mod2070.parseInline;
    obj2 = { allowSubtext: false };
    const str = arg0[1];
    _mod2070;
    trimmed = str.trim();
    const merged = Object.assign(arg2);
    return obj;
  }
};
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
