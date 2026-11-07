// Module ID: 16381
// Function ID: 16382
// Name: CanonicalizeUValue
// Dependencies: [16375]
// Exports: CanonicalizeUValue

// Module 16381 (CanonicalizeUValue)
import _mod16375 from "module_16375" /* 16375 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16375.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
