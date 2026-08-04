// Module ID: 13428
// Function ID: 13429
// Name: CanonicalizeUValue
// Dependencies: [13422]

// Module 13428 (CanonicalizeUValue)
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13422) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
