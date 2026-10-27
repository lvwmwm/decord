// Module ID: 15495
// Function ID: 15496
// Name: CanonicalizeUValue
// Dependencies: [15489]
// Exports: CanonicalizeUValue

// Module 15495 (CanonicalizeUValue)
import _mod15489 from "module_15489" /* 15489 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15489.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
