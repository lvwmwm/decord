// Module ID: 15270
// Function ID: 15271
// Name: CanonicalizeUValue
// Dependencies: [15264]
// Exports: CanonicalizeUValue

// Module 15270 (CanonicalizeUValue)
import _mod15264 from "module_15264" /* 15264 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15264.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
