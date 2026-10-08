// Module ID: 14328
// Function ID: 14329
// Name: CanonicalizeUValue
// Dependencies: [14322]
// Exports: CanonicalizeUValue

// Module 14328 (CanonicalizeUValue)
import _mod14322 from "module_14322" /* 14322 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14322.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
