// Module ID: 13394
// Function ID: 13395
// Name: CanonicalizeUValue
// Dependencies: [13388]

// Module 13394 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13388) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
