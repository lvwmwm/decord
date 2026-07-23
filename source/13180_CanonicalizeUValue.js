// Module ID: 13180
// Function ID: 101536
// Name: CanonicalizeUValue
// Dependencies: [13174]

// Module 13180 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13174) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
