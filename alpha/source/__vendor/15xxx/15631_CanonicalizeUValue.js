// Module ID: 15631
// Function ID: 15632
// Name: CanonicalizeUValue
// Dependencies: [15625]
// Exports: CanonicalizeUValue

// Module 15631 (CanonicalizeUValue)
import _mod15625 from "module_15625" /* 15625 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15625.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
