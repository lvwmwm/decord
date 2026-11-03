// Module ID: 16221
// Function ID: 16222
// Name: CanonicalizeUValue
// Dependencies: [16215]
// Exports: CanonicalizeUValue

// Module 16221 (CanonicalizeUValue)
import _mod16215 from "module_16215" /* 16215 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16215.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
