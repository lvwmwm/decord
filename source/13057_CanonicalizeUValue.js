// Module ID: 13057
// Function ID: 99325
// Name: CanonicalizeUValue
// Dependencies: [13010]

// Module 13057 (CanonicalizeUValue)
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  str(arg6[0]).invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
