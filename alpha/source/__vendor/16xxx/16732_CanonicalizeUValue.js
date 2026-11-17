// Module ID: 16732
// Function ID: 16733
// Name: CanonicalizeUValue
// Dependencies: [16726]
// Exports: CanonicalizeUValue

// Module 16732 (CanonicalizeUValue)
import _mod16726 from "module_16726" /* 16726 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16726.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
