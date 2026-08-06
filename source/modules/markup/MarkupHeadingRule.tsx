// Module ID: 4741
// Function ID: 4742
// Name: match
// Dependencies: [3983, 2]

// Module 4741 (match)
const require = arg1;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(require("t").defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== str) {
        tmp = null;
      }
    }
    tmp = require(3983) /* t */.anyScopeRegex(/^ *(#{1,3})(?:\s+)([^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    const obj = require(3983) /* t */;
  }
  return tmp;
};
const result = require("set").fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
