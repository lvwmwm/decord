// Module ID: 907
// Function ID: 908
// Name: getActivationStart
// Dependencies: [908]

// Module 907 (getActivationStart)
import getNavigationEntry from "getNavigationEntry" /* 908 */;

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
