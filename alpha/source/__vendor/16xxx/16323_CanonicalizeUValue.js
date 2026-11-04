// Module ID: 16323
// Function ID: 16324
// Name: CanonicalizeUValue
// Dependencies: [16317]
// Exports: CanonicalizeUValue

// Module 16323 (CanonicalizeUValue)
import _mod16317 from "module_16317" /* 16317 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16317.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
