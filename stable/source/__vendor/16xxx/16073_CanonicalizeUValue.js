// Module ID: 16073
// Function ID: 16074
// Name: CanonicalizeUValue
// Dependencies: [16067]
// Exports: CanonicalizeUValue

// Module 16073 (CanonicalizeUValue)
import _mod16067 from "module_16067" /* 16067 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16067.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
