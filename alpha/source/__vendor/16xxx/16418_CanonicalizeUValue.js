// Module ID: 16418
// Function ID: 16419
// Name: CanonicalizeUValue
// Dependencies: [16412]
// Exports: CanonicalizeUValue

// Module 16418 (CanonicalizeUValue)
import _mod16412 from "module_16412" /* 16412 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod16412.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
