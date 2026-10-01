// Module ID: 907
// Function ID: 908
// Dependencies: [908]
// Exports: getActivationStart

// Module 907
import _mod908 from "module_908" /* 908 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getActivationStart = () => {
  const obj = _mod908;
  const navigationEntry = obj.getNavigationEntry();
  let num;
  if (navigationEntry != null) {
    num = navigationEntry.activationStart;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
