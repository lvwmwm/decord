// Module ID: 14125
// Function ID: 14126
// Name: CanonicalizeUValue
// Dependencies: [14119]

// Module 14125 (CanonicalizeUValue)
import isMatched from "isMatched" /* 14119 */;

require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  isMatched.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
