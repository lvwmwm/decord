// Module ID: 7094
// Function ID: 7095
// Name: MarkupSubtextRule
// Dependencies: [2069, 2]

// Module 7094 (MarkupSubtextRule)
import _mod2069 from "module_2069" /* 2069 */;
import size from "module_2" /* 2 */;

const _modDef2069 = _mod2069;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
let obj = {
  order: _modDef2069.defaultRules.heading.order,
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
      const obj = _mod2069;
      tmp4 = obj.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, arg1, arg2) {
    let obj2;
    let parseInline;
    let trimmed;
    const obj = { content: parseInline(arg1, trimmed, obj2) };
    parseInline = _mod2069.parseInline;
    obj2 = { allowSubtext: false };
    const str = arg0[1];
    _mod2069;
    trimmed = str.trim();
    const merged = Object.assign(arg2);
    return obj;
  }
};
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
