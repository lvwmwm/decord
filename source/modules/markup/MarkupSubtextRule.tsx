// Module ID: 4803
// Function ID: 4804
// Dependencies: [4060, 2]

// Module 4803
const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
let obj = {
  order: require("t").defaultRules.heading.order,
  requiredFirstCharacters: ["-"],
  match(arg0, allowSubtext, str) {
    let tmp = null;
    if (false !== allowSubtext.allowSubtext) {
      if (null != str) {
        if ("" !== str) {
          let tmp4 = null;
        }
        tmp = tmp4;
      }
      tmp4 = require(4060) /* t */.anyScopeRegex(closure_3)(arg0, allowSubtext, str);
      const obj = require(4060) /* t */;
    }
    return tmp;
  },
  parse(arg0, arg1, arg2) {
    let obj = { content: null };
    obj = {};
    const trimmed = arg0[1].trim();
    const merged = Object.assign(arg2);
    obj.allowSubtext = false;
    obj[0] = require(4060) /* t */.parseInline(arg1, trimmed, obj);
    return obj;
  }
};
const result = require("set").fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
