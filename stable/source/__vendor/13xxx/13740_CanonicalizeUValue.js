// Module ID: 13740
// Function ID: 13741
// Name: CanonicalizeUValue
// Dependencies: [13734]
// Exports: CanonicalizeUValue

// Module 13740 (CanonicalizeUValue)
import _mod13734 from "module_13734" /* 13734 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod13734.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
