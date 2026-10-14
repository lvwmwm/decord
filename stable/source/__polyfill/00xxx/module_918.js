// Module ID: 918
// Function ID: 919
// Dependencies: [919]
// Exports: getActivationStart

// Module 918
import _mod919 from "module_919" /* 919 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getActivationStart = () => {
  const obj = _mod919;
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
