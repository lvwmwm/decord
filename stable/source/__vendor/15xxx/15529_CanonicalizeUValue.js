// Module ID: 15529
// Function ID: 15530
// Name: CanonicalizeUValue
// Dependencies: [15523]
// Exports: CanonicalizeUValue

// Module 15529 (CanonicalizeUValue)
import _mod15523 from "module_15523" /* 15523 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15523.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
