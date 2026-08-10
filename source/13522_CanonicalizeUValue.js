// Module ID: 13522
// Function ID: 13523
// Name: CanonicalizeUValue
// Dependencies: [13516]

// Module 13522 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13516) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
