// Module ID: 15302
// Function ID: 15303
// Name: CanonicalizeUValue
// Dependencies: [15296]
// Exports: CanonicalizeUValue

// Module 15302 (CanonicalizeUValue)
import _mod15296 from "module_15296" /* 15296 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15296.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
