// Module ID: 8805
// Function ID: 8806
// Name: MarkupSubtextRule
// Dependencies: [2068, 2]

// Module 8805 (MarkupSubtextRule)
import _mod2068 from "module_2068" /* 2068 */;
import size from "module_2" /* 2 */;

const _modDef2068 = _mod2068;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
let obj = {
  order: _modDef2068.defaultRules.heading.order,
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
      const obj = _mod2068;
      tmp4 = obj.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, arg1, arg2) {
    let obj2;
    let parseInline;
    let trimmed;
    const obj = { content: parseInline(arg1, trimmed, obj2) };
    parseInline = _mod2068.parseInline;
    obj2 = { allowSubtext: false };
    const str = arg0[1];
    _mod2068;
    trimmed = str.trim();
    const merged = Object.assign(arg2);
    return obj;
  }
};
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
