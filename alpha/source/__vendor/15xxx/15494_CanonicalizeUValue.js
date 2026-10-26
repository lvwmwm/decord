// Module ID: 15494
// Function ID: 15495
// Name: CanonicalizeUValue
// Dependencies: [15488]
// Exports: CanonicalizeUValue

// Module 15494 (CanonicalizeUValue)
import _mod15488 from "module_15488" /* 15488 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15488.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
