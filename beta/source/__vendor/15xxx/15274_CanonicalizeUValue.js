// Module ID: 15274
// Function ID: 15275
// Name: CanonicalizeUValue
// Dependencies: [15268]
// Exports: CanonicalizeUValue

// Module 15274 (CanonicalizeUValue)
import _mod15268 from "module_15268" /* 15268 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15268.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
