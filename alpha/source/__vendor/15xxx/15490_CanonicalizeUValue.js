// Module ID: 15490
// Function ID: 15491
// Name: CanonicalizeUValue
// Dependencies: [15484]
// Exports: CanonicalizeUValue

// Module 15490 (CanonicalizeUValue)
import _mod15484 from "module_15484" /* 15484 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15484.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
