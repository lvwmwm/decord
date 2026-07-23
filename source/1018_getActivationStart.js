// Module ID: 1018
// Function ID: 11062
// Name: getActivationStart
// Dependencies: [1019]

// Module 1018 (getActivationStart)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getActivationStart = function getActivationStart() {
  let activationStart;
  const navigationEntry = require(1019) /* getNavigationEntry */.getNavigationEntry();
  if (null != navigationEntry) {
    activationStart = navigationEntry.activationStart;
  }
  let num = 0;
  if (null != activationStart) {
    num = activationStart;
  }
  return num;
};
