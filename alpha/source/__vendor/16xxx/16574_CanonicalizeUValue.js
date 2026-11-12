// Module ID: 16574
// Function ID: 16575
// Name: CanonicalizeUValue
// Dependencies: [16568]
// Exports: CanonicalizeUValue

// Module 16574 (CanonicalizeUValue)
import _mod16568 from "module_16568" /* 16568 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16568.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
