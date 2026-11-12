// Module ID: 16423
// Function ID: 16424
// Name: CanonicalizeUValue
// Dependencies: [16417]
// Exports: CanonicalizeUValue

// Module 16423 (CanonicalizeUValue)
import _mod16417 from "module_16417" /* 16417 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16417.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
