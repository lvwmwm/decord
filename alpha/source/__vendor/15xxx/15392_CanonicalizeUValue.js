// Module ID: 15392
// Function ID: 15393
// Name: CanonicalizeUValue
// Dependencies: [15386]
// Exports: CanonicalizeUValue

// Module 15392 (CanonicalizeUValue)
import _mod15386 from "module_15386" /* 15386 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15386.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
