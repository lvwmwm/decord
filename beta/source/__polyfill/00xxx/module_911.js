// Module ID: 911
// Function ID: 912
// Dependencies: [912]
// Exports: getActivationStart

// Module 911
import _mod912 from "module_912" /* 912 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getActivationStart = () => {
  const navigationEntry = _mod912.getNavigationEntry();
  let num;
  if (navigationEntry != null) {
    num = navigationEntry.activationStart;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
