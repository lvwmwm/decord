// Module ID: 15191
// Function ID: 15192
// Name: CanonicalizeUValue
// Dependencies: [15185]
// Exports: CanonicalizeUValue

// Module 15191 (CanonicalizeUValue)
import _mod15185 from "module_15185" /* 15185 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15185.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
