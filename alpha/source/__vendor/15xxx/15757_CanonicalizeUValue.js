// Module ID: 15757
// Function ID: 15758
// Name: CanonicalizeUValue
// Dependencies: [15751]
// Exports: CanonicalizeUValue

// Module 15757 (CanonicalizeUValue)
import _mod15751 from "module_15751" /* 15751 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15751.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
