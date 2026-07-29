// Module ID: 1042
// Function ID: 1043
// Name: getActivationStart
// Dependencies: [1043]

// Module 1042 (getActivationStart)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getActivationStart = () => {
  const navigationEntry = require(1043) /* getNavigationEntry */.getNavigationEntry();
  let num;
  if (navigationEntry != null) {
    num = navigationEntry.activationStart;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
