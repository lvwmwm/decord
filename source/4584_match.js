// Module ID: 4584
// Function ID: 40135
// Name: match
// Dependencies: []

// Module 4584 (match)
let closure_2 = /\n$/;
const obj = {};
const merged = Object.assign(importDefault(dependencyMap[0]).defaultRules.heading);
obj["requiredFirstCharacters"] = ["isArray", "isArray"];
obj["match"] = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== str) {
        tmp = null;
      }
    }
    tmp = allowHeading(dependencyMap[0]).anyScopeRegex(/^ *(#{1,3})(?:\s+)([^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    const obj = allowHeading(dependencyMap[0]);
  }
  return tmp;
};
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
