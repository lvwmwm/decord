// Module ID: 15320
// Function ID: 15321
// Name: CanonicalizeUValue
// Dependencies: [15314]
// Exports: CanonicalizeUValue

// Module 15320 (CanonicalizeUValue)
import _mod15314 from "module_15314" /* 15314 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15314.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
