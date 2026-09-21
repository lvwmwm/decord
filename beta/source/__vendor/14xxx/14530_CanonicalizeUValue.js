// Module ID: 14530
// Function ID: 14531
// Name: CanonicalizeUValue
// Dependencies: [14524]
// Exports: CanonicalizeUValue

// Module 14530 (CanonicalizeUValue)
import _mod14524 from "module_14524" /* 14524 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14524.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
