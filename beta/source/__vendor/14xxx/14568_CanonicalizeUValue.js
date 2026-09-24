// Module ID: 14568
// Function ID: 14569
// Name: CanonicalizeUValue
// Dependencies: [14562]
// Exports: CanonicalizeUValue

// Module 14568 (CanonicalizeUValue)
import _mod14562 from "module_14562" /* 14562 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14562.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
