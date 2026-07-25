// Module ID: 13244
// Function ID: 101990
// Name: CanonicalizeUValue
// Dependencies: [13238]

// Module 13244 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13238) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
