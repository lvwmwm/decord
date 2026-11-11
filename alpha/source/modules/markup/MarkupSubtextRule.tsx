// Module ID: 9292
// Function ID: 9293
// Name: MarkupSubtextRule
// Dependencies: [2067, 2]

// Module 9292 (MarkupSubtextRule)
import _mod2067 from "module_2067" /* 2067 */;
import size from "module_2" /* 2 */;

const _modDef2067 = _mod2067;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
let obj = {
  order: _modDef2067.defaultRules.heading.order,
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
      const obj = _mod2067;
      tmp4 = obj.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, arg1, arg2) {
    let obj2;
    let parseInline;
    let trimmed;
    const obj = { content: parseInline(arg1, trimmed, obj2) };
    parseInline = _mod2067.parseInline;
    obj2 = { allowSubtext: false };
    const str = arg0[1];
    _mod2067;
    trimmed = str.trim();
    const merged = Object.assign(arg2);
    return obj;
  }
};
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
