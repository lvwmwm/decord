// Module ID: 14173
// Function ID: 14174
// Name: CanonicalizeUValue
// Dependencies: [14167]

// Module 14173 (CanonicalizeUValue)
import isMatched from "isMatched" /* 14167 */;

require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  isMatched.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
