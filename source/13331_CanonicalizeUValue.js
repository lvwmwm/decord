// Module ID: 13331
// Function ID: 13332
// Name: CanonicalizeUValue
// Dependencies: [13325]

// Module 13331 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13325) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
