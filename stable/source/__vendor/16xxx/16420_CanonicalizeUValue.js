// Module ID: 16420
// Function ID: 16421
// Name: CanonicalizeUValue
// Dependencies: [16414]
// Exports: CanonicalizeUValue

// Module 16420 (CanonicalizeUValue)
import _mod16414 from "module_16414" /* 16414 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16414.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
