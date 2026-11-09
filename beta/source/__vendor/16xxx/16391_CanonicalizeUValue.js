// Module ID: 16391
// Function ID: 16392
// Name: CanonicalizeUValue
// Dependencies: [16385]
// Exports: CanonicalizeUValue

// Module 16391 (CanonicalizeUValue)
import _mod16385 from "module_16385" /* 16385 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16385.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
