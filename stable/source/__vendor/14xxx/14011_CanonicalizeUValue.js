// Module ID: 14011
// Function ID: 14012
// Name: CanonicalizeUValue
// Dependencies: [14005]
// Exports: CanonicalizeUValue

// Module 14011 (CanonicalizeUValue)
import _mod14005 from "module_14005" /* 14005 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14005.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
