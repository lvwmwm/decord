// Module ID: 15509
// Function ID: 15510
// Name: CanonicalizeUValue
// Dependencies: [15503]
// Exports: CanonicalizeUValue

// Module 15509 (CanonicalizeUValue)
import _mod15503 from "module_15503" /* 15503 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15503.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
