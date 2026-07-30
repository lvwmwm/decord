// Module ID: 13307
// Function ID: 13308
// Name: CanonicalizeUValue
// Dependencies: [13301]

// Module 13307 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13301) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
