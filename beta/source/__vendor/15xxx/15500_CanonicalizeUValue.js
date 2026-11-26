// Module ID: 15500
// Function ID: 15501
// Name: CanonicalizeUValue
// Dependencies: [15494]
// Exports: CanonicalizeUValue

// Module 15500 (CanonicalizeUValue)
import _mod15494 from "module_15494" /* 15494 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15494.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
