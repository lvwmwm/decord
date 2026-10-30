// Module ID: 904
// Function ID: 905
// Dependencies: [905]
// Exports: getActivationStart

// Module 904
import _mod905 from "module_905" /* 905 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getActivationStart = () => {
  const obj = _mod905;
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
