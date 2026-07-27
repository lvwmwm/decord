// Module ID: 13245
// Function ID: 101995
// Name: CanonicalizeUValue
// Dependencies: [13239]

// Module 13245 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13239) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
