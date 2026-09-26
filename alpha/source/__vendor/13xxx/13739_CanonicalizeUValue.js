// Module ID: 13739
// Function ID: 13740
// Name: CanonicalizeUValue
// Dependencies: [13733]
// Exports: CanonicalizeUValue

// Module 13739 (CanonicalizeUValue)
import _mod13733 from "module_13733" /* 13733 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13733.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
