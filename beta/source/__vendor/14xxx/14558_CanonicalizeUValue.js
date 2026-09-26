// Module ID: 14558
// Function ID: 14559
// Name: CanonicalizeUValue
// Dependencies: [14552]
// Exports: CanonicalizeUValue

// Module 14558 (CanonicalizeUValue)
import _mod14552 from "module_14552" /* 14552 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14552.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
