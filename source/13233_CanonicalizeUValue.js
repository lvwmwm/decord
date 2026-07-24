// Module ID: 13233
// Function ID: 101863
// Name: CanonicalizeUValue
// Dependencies: [13227]

// Module 13233 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13227) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
