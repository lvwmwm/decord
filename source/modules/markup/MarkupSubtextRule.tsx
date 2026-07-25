// Module ID: 4592
// Function ID: 40247
// Dependencies: [3830, 2]

// Module 4592
const re2 = /\n$/;
const re3 = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/;
let obj = {
  order: require("t").defaultRules.heading.order,
  requiredFirstCharacters: ["-"],
  match(arg0, arg1, str) {
    if (null != str) {
      if ("" !== str) {
        let tmp2 = null;
      }
      return tmp2;
    }
    tmp2 = require(3830) /* t */.anyScopeRegex(closure_3)(arg0, arg1, str);
  },
  parse(arg0, arg1, inline) {
    const obj = { content: require(3830) /* t */.parseInline(arg1, arg0[1].trim(), inline) };
    return obj;
  }
};
const result = require("set").fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
