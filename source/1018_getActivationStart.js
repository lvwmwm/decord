// Module ID: 1018
// Function ID: 11057
// Name: getActivationStart
// Dependencies: []

// Module 1018 (getActivationStart)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getActivationStart = function getActivationStart() {
  let activationStart;
  const navigationEntry = arg1(arg6[0]).getNavigationEntry();
  if (null != navigationEntry) {
    activationStart = navigationEntry.activationStart;
  }
  let num = 0;
  if (null != activationStart) {
    num = activationStart;
  }
  return num;
};
