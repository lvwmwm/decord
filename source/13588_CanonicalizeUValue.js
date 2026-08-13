// Module ID: 13588
// Function ID: 13589
// Name: CanonicalizeUValue
// Dependencies: [13582]

// Module 13588 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13582) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
