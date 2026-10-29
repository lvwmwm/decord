// Module ID: 15993
// Function ID: 15994
// Name: CanonicalizeUValue
// Dependencies: [15987]
// Exports: CanonicalizeUValue

// Module 15993 (CanonicalizeUValue)
import _mod15987 from "module_15987" /* 15987 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15987.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
