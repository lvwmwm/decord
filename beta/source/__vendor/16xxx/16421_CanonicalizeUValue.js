// Module ID: 16421
// Function ID: 16422
// Name: CanonicalizeUValue
// Dependencies: [16415]
// Exports: CanonicalizeUValue

// Module 16421 (CanonicalizeUValue)
import _mod16415 from "module_16415" /* 16415 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16415.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
