// Module ID: 8113
// Function ID: 8114
// Name: MarkupSubtextRule
// Dependencies: [1949, 2]

// Module 8113 (MarkupSubtextRule)
import _mod1949 from "module_1949" /* 1949 */;
import size from "module_2" /* 2 */;

const _modDef1949 = _mod1949;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
let obj = {
  order: _modDef1949.defaultRules.heading.order,
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
      const obj = _mod1949;
      tmp4 = obj.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, fn, arg2) {
    let obj2;
    let parseInline;
    let trimmed;
    const obj = { content: parseInline(fn, trimmed, obj2) };
    parseInline = _mod1949.parseInline;
    obj2 = { allowSubtext: false };
    const str = arg0[1];
    _mod1949;
    trimmed = str.trim();
    const merged = Object.assign(arg2);
    return obj;
  }
};
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
