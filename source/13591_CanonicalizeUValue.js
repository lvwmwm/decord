// Module ID: 13591
// Function ID: 13592
// Name: CanonicalizeUValue
// Dependencies: [13585]

// Module 13591 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13585) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
