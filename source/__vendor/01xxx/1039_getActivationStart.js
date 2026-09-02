// Module ID: 1039
// Function ID: 1040
// Name: getActivationStart
// Dependencies: [1040]

// Module 1039 (getActivationStart)
import getNavigationEntry from "getNavigationEntry" /* 1040 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getActivationStart = () => {
  const navigationEntry = getNavigationEntry.getNavigationEntry();
  let num;
  if (navigationEntry != null) {
    num = navigationEntry.activationStart;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
