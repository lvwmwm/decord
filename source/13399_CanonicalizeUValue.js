// Module ID: 13399
// Function ID: 13400
// Name: CanonicalizeUValue
// Dependencies: [13393]

// Module 13399 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13393) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
