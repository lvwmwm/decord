// Module ID: 8699
// Function ID: 8700
// Name: MarkupSubtextRule
// Dependencies: [2072, 2]

// Module 8699 (MarkupSubtextRule)
import _mod2072 from "module_2072" /* 2072 */;
import size from "module_2" /* 2 */;

const _modDef2072 = _mod2072;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
let obj = {
  order: _modDef2072.defaultRules.heading.order,
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
      const obj = _mod2072;
      tmp4 = obj.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, fn, arg2) {
    let obj2;
    let parseInline;
    let trimmed;
    const obj = { content: parseInline(fn, trimmed, obj2) };
    parseInline = _mod2072.parseInline;
    obj2 = { allowSubtext: false };
    const str = arg0[1];
    _mod2072;
    trimmed = str.trim();
    const merged = Object.assign(arg2);
    return obj;
  }
};
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
