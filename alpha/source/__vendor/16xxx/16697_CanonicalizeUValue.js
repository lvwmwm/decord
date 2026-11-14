// Module ID: 16697
// Function ID: 16698
// Name: CanonicalizeUValue
// Dependencies: [16691]
// Exports: CanonicalizeUValue

// Module 16697 (CanonicalizeUValue)
import _mod16691 from "module_16691" /* 16691 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16691.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
