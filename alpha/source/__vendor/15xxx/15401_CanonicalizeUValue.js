// Module ID: 15401
// Function ID: 15402
// Name: CanonicalizeUValue
// Dependencies: [15395]
// Exports: CanonicalizeUValue

// Module 15401 (CanonicalizeUValue)
import _mod15395 from "module_15395" /* 15395 */;


export function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod15395.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
