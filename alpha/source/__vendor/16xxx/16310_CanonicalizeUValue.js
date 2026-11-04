// Module ID: 16310
// Function ID: 16311
// Name: CanonicalizeUValue
// Dependencies: [16304]
// Exports: CanonicalizeUValue

// Module 16310 (CanonicalizeUValue)
import _mod16304 from "module_16304" /* 16304 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16304.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
