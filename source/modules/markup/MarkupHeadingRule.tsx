// Module ID: 4589
// Function ID: 40227
// Name: match
// Dependencies: [3829, 2]

// Module 4589 (match)
const require = arg1;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(require("t").defaultRules.heading);
obj["requiredFirstCharacters"] = [" ", "#"];
obj["match"] = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== str) {
        tmp = null;
      }
    }
    tmp = require(3829) /* t */.anyScopeRegex(/^ *(#{1,3})(?:\s+)([^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    const obj = require(3829) /* t */;
  }
  return tmp;
};
const result = require("set").fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
