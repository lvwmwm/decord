// Module ID: 13427
// Function ID: 13428
// Name: CanonicalizeUValue
// Dependencies: [13421]

// Module 13427 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13421) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
