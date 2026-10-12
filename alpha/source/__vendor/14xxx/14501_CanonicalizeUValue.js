// Module ID: 14501
// Function ID: 14502
// Name: CanonicalizeUValue
// Dependencies: [14495]
// Exports: CanonicalizeUValue

// Module 14501 (CanonicalizeUValue)
import _mod14495 from "module_14495" /* 14495 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14495.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
