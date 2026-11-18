// Module ID: 15415
// Function ID: 15416
// Name: CanonicalizeUValue
// Dependencies: [15409]
// Exports: CanonicalizeUValue

// Module 15415 (CanonicalizeUValue)
import _mod15409 from "module_15409" /* 15409 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15409.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
