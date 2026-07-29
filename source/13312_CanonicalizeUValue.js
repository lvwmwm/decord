// Module ID: 13312
// Function ID: 13313
// Name: CanonicalizeUValue
// Dependencies: [13306]

// Module 13312 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13306) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
