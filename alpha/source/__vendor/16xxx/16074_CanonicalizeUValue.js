// Module ID: 16074
// Function ID: 16075
// Name: CanonicalizeUValue
// Dependencies: [16068]
// Exports: CanonicalizeUValue

// Module 16074 (CanonicalizeUValue)
import _mod16068 from "module_16068" /* 16068 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16068.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
