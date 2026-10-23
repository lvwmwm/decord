// Module ID: 15470
// Function ID: 15471
// Name: CanonicalizeUValue
// Dependencies: [15464]
// Exports: CanonicalizeUValue

// Module 15470 (CanonicalizeUValue)
import _mod15464 from "module_15464" /* 15464 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15464.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
