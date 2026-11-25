// Module ID: 15496
// Function ID: 15497
// Name: CanonicalizeUValue
// Dependencies: [15490]
// Exports: CanonicalizeUValue

// Module 15496 (CanonicalizeUValue)
import _mod15490 from "module_15490" /* 15490 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15490.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
