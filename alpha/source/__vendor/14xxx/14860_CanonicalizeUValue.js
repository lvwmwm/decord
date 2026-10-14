// Module ID: 14860
// Function ID: 14861
// Name: CanonicalizeUValue
// Dependencies: [14854]
// Exports: CanonicalizeUValue

// Module 14860 (CanonicalizeUValue)
import _mod14854 from "module_14854" /* 14854 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14854.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
