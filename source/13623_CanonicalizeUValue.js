// Module ID: 13623
// Function ID: 13624
// Name: CanonicalizeUValue
// Dependencies: [13617]

// Module 13623 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13617) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
