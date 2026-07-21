// Module ID: 1018
// Function ID: 11061
// Name: getActivationStart
// Dependencies: []

// Module 1018 (getActivationStart)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getActivationStart = function getActivationStart(activationStart, d, evenodd) {
  activationStart = undefined;
  const navigationEntry = d(arg6[0]).getNavigationEntry();
  if (null != navigationEntry) {
    activationStart = navigationEntry.activationStart;
  }
  let num = 0;
  if (null != activationStart) {
    num = activationStart;
  }
  return num;
};
