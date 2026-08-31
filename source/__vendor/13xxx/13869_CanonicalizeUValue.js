// Module ID: 13869
// Function ID: 13870
// Name: CanonicalizeUValue
// Dependencies: [13863]

// Module 13869 (CanonicalizeUValue)
import isMatched from "isMatched" /* 13863 */;

require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  isMatched.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
