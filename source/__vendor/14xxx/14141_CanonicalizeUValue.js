// Module ID: 14141
// Function ID: 14142
// Name: CanonicalizeUValue
// Dependencies: [14135]

// Module 14141 (CanonicalizeUValue)
import isMatched from "isMatched" /* 14135 */;

require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  isMatched.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
