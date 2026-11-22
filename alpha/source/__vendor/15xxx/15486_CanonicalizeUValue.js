// Module ID: 15486
// Function ID: 15487
// Name: CanonicalizeUValue
// Dependencies: [15480]
// Exports: CanonicalizeUValue

// Module 15486 (CanonicalizeUValue)
import _mod15480 from "module_15480" /* 15480 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15480.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
