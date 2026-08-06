// Module ID: 13436
// Function ID: 13437
// Name: CanonicalizeUValue
// Dependencies: [13430]

// Module 13436 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13430) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
