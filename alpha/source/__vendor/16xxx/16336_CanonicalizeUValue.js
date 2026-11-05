// Module ID: 16336
// Function ID: 16337
// Name: CanonicalizeUValue
// Dependencies: [16330]
// Exports: CanonicalizeUValue

// Module 16336 (CanonicalizeUValue)
import _mod16330 from "module_16330" /* 16330 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16330.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
