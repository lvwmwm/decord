// Module ID: 15449
// Function ID: 15450
// Name: CanonicalizeUValue
// Dependencies: [15443]
// Exports: CanonicalizeUValue

// Module 15449 (CanonicalizeUValue)
import _mod15443 from "module_15443" /* 15443 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15443.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
