// Module ID: 16033
// Function ID: 16034
// Name: CanonicalizeUValue
// Dependencies: [16027]
// Exports: CanonicalizeUValue

// Module 16033 (CanonicalizeUValue)
import _mod16027 from "module_16027" /* 16027 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16027.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
