// Module ID: 15201
// Function ID: 15202
// Name: CanonicalizeUValue
// Dependencies: [15195]
// Exports: CanonicalizeUValue

// Module 15201 (CanonicalizeUValue)
import _mod15195 from "module_15195" /* 15195 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15195.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
