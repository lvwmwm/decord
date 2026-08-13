// Module ID: 13579
// Function ID: 13580
// Name: CanonicalizeUValue
// Dependencies: [13573]

// Module 13579 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13573) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
