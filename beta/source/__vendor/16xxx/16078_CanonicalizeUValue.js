// Module ID: 16078
// Function ID: 16079
// Name: CanonicalizeUValue
// Dependencies: [16072]
// Exports: CanonicalizeUValue

// Module 16078 (CanonicalizeUValue)
import _mod16072 from "module_16072" /* 16072 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16072.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
