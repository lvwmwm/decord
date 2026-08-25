// Module ID: 13716
// Function ID: 13717
// Name: CanonicalizeUValue
// Dependencies: [13710]

// Module 13716 (CanonicalizeUValue)
import isMatched from "isMatched" /* 13710 */;

require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  isMatched.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
