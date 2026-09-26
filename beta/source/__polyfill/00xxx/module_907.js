// Module ID: 907
// Function ID: 908
// Dependencies: [908]
// Exports: getActivationStart

// Module 907
import _mod908 from "module_908" /* 908 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getActivationStart = () => {
  const navigationEntry = _mod908.getNavigationEntry();
  let num;
  if (navigationEntry != null) {
    num = navigationEntry.activationStart;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
