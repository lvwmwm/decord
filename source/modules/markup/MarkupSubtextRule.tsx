// Module ID: 4587
// Function ID: 40191
// Dependencies: []

// Module 4587
let closure_2 = /\n$/;
let closure_3 = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default {
  order: importDefault(dependencyMap[0]).defaultRules.heading.order,
  requiredFirstCharacters: [true],
  match(arg0, arg1, str) {
    if (null != str) {
      if ("" !== str) {
        let tmp2 = null;
      }
      return tmp2;
    }
    tmp2 = require(dependencyMap[0]).anyScopeRegex(closure_3)(arg0, arg1, str);
  },
  parse(arg0, arg1, inline) {
    const obj = { content: require(dependencyMap[0]).parseInline(arg1, arg0[1].trim(), inline) };
    return obj;
  }
};
