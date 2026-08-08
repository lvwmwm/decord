// Module ID: 13520
// Function ID: 13521
// Name: CanonicalizeUValue
// Dependencies: [13514]

// Module 13520 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13514) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
