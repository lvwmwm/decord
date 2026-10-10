// Module ID: 14478
// Function ID: 14479
// Name: CanonicalizeUValue
// Dependencies: [14472]
// Exports: CanonicalizeUValue

// Module 14478 (CanonicalizeUValue)
import _mod14472 from "module_14472" /* 14472 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14472.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
