// Module ID: 13450
// Function ID: 13451
// Name: CanonicalizeUValue
// Dependencies: [13444]

// Module 13450 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13444) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
