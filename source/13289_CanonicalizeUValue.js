// Module ID: 13289
// Function ID: 102168
// Name: CanonicalizeUValue
// Dependencies: [13283]

// Module 13289 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13283) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
