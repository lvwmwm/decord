// Module ID: 15436
// Function ID: 15437
// Name: CanonicalizeUValue
// Dependencies: [15430]
// Exports: CanonicalizeUValue

// Module 15436 (CanonicalizeUValue)
import _mod15430 from "module_15430" /* 15430 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15430.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
