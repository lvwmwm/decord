// Module ID: 14009
// Function ID: 14010
// Name: CanonicalizeUValue
// Dependencies: [14003]
// Exports: CanonicalizeUValue

// Module 14009 (CanonicalizeUValue)
import _mod14003 from "module_14003" /* 14003 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14003.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
