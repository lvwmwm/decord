// Module ID: 14822
// Function ID: 14823
// Name: CanonicalizeUValue
// Dependencies: [14816]
// Exports: CanonicalizeUValue

// Module 14822 (CanonicalizeUValue)
import _mod14816 from "module_14816" /* 14816 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14816.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
