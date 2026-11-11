// Module ID: 16579
// Function ID: 16580
// Name: CanonicalizeUValue
// Dependencies: [16573]
// Exports: CanonicalizeUValue

// Module 16579 (CanonicalizeUValue)
import _mod16573 from "module_16573" /* 16573 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16573.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
