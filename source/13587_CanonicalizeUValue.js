// Module ID: 13587
// Function ID: 13588
// Name: CanonicalizeUValue
// Dependencies: [13581]

// Module 13587 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13581) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
