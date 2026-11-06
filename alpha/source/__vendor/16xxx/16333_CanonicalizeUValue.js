// Module ID: 16333
// Function ID: 16334
// Name: CanonicalizeUValue
// Dependencies: [16327]
// Exports: CanonicalizeUValue

// Module 16333 (CanonicalizeUValue)
import _mod16327 from "module_16327" /* 16327 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16327.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
