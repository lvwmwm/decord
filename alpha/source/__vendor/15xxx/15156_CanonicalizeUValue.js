// Module ID: 15156
// Function ID: 15157
// Name: CanonicalizeUValue
// Dependencies: [15150]
// Exports: CanonicalizeUValue

// Module 15156 (CanonicalizeUValue)
import _mod15150 from "module_15150" /* 15150 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15150.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
