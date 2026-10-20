// Module ID: 14506
// Function ID: 14507
// Name: CanonicalizeUValue
// Dependencies: [14500]
// Exports: CanonicalizeUValue

// Module 14506 (CanonicalizeUValue)
import _mod14500 from "module_14500" /* 14500 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14500.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
