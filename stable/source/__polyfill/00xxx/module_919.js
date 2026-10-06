// Module ID: 919
// Function ID: 920
// Dependencies: [920]
// Exports: getActivationStart

// Module 919
import _mod920 from "module_920" /* 920 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getActivationStart = () => {
  const obj = _mod920;
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
