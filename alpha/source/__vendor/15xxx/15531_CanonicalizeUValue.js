// Module ID: 15531
// Function ID: 15532
// Name: CanonicalizeUValue
// Dependencies: [15525]
// Exports: CanonicalizeUValue

// Module 15531 (CanonicalizeUValue)
import _mod15525 from "module_15525" /* 15525 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15525.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
