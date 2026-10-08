// Module ID: 8105
// Function ID: 8106
// Name: MarkupSubtextRule
// Dependencies: [1948, 2]

// Module 8105 (MarkupSubtextRule)
import _mod1948 from "module_1948" /* 1948 */;
import size from "module_2" /* 2 */;

const _modDef1948 = _mod1948;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
let obj = {
  order: _modDef1948.defaultRules.heading.order,
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
      const obj = _mod1948;
      tmp4 = obj.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, fn, arg2) {
    let obj2;
    let parseInline;
    let trimmed;
    const obj = { content: parseInline(fn, trimmed, obj2) };
    parseInline = _mod1948.parseInline;
    obj2 = { allowSubtext: false };
    const str = arg0[1];
    _mod1948;
    trimmed = str.trim();
    const merged = Object.assign(arg2);
    return obj;
  }
};
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
