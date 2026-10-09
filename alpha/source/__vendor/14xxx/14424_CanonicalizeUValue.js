// Module ID: 14424
// Function ID: 14425
// Name: CanonicalizeUValue
// Dependencies: [14418]
// Exports: CanonicalizeUValue

// Module 14424 (CanonicalizeUValue)
import _mod14418 from "module_14418" /* 14418 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14418.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
