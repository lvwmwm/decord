// Module ID: 916
// Function ID: 917
// Dependencies: [917]
// Exports: getActivationStart

// Module 916
import _mod917 from "module_917" /* 917 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getActivationStart = () => {
  const obj = _mod917;
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
