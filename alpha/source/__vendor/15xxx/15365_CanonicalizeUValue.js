// Module ID: 15365
// Function ID: 15366
// Name: CanonicalizeUValue
// Dependencies: [15359]
// Exports: CanonicalizeUValue

// Module 15365 (CanonicalizeUValue)
import _mod15359 from "module_15359" /* 15359 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15359.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
