// Module ID: 16699
// Function ID: 16700
// Name: CanonicalizeUValue
// Dependencies: [16693]
// Exports: CanonicalizeUValue

// Module 16699 (CanonicalizeUValue)
import _mod16693 from "module_16693" /* 16693 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16693.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
