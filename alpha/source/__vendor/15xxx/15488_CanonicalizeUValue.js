// Module ID: 15488
// Function ID: 15489
// Name: CanonicalizeUValue
// Dependencies: [15482]
// Exports: CanonicalizeUValue

// Module 15488 (CanonicalizeUValue)
import _mod15482 from "module_15482" /* 15482 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15482.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
