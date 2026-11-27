// Module ID: 15689
// Function ID: 15690
// Name: CanonicalizeUValue
// Dependencies: [15683]
// Exports: CanonicalizeUValue

// Module 15689 (CanonicalizeUValue)
import _mod15683 from "module_15683" /* 15683 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15683.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
