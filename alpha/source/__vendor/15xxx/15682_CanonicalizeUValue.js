// Module ID: 15682
// Function ID: 15683
// Name: CanonicalizeUValue
// Dependencies: [15676]
// Exports: CanonicalizeUValue

// Module 15682 (CanonicalizeUValue)
import _mod15676 from "module_15676" /* 15676 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15676.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
