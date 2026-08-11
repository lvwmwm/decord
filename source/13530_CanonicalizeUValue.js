// Module ID: 13530
// Function ID: 13531
// Name: CanonicalizeUValue
// Dependencies: [13524]

// Module 13530 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13524) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
