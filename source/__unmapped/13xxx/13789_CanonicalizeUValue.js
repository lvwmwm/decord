// Module ID: 13789
// Function ID: 13790
// Name: CanonicalizeUValue
// Dependencies: [13783]

// Module 13789 (CanonicalizeUValue)
import isMatched from "isMatched" /* 13783 */;

require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  isMatched.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
