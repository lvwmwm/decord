// Module ID: 993
// Function ID: 10666
// Name: getPromisePolyfill
// Dependencies: []

// Module 993 (getPromisePolyfill)
function getPromisePolyfill() {
  return arg1(arg6[4]);
}
arg5.polyfillPromise = function polyfillPromise() {
  if (callback(arg6[0]).ReactNativeLibraries.Utilities) {
    const callback = getPromisePolyfill();
    callback(arg6[2]);
    callback(arg6[3]);
    const Utilities = callback(arg6[0]).ReactNativeLibraries.Utilities;
    Utilities.polyfillGlobal("Promise", () => closure_0);
  } else {
    const debug = callback(arg6[1]).debug;
    debug.warn("Could not polyfill Promise. React Native Libraries Utilities not found.");
  }
};
arg5.getPromisePolyfill = getPromisePolyfill;
arg5.requireRejectionTracking = function requireRejectionTracking() {
  return arg1(arg6[5]);
};
arg5.checkPromiseAndWarn = function checkPromiseAndWarn() {
  const tmp = arg1(arg6[4]);
  if (arg1(arg6[0]).ReactNativeLibraries.Promise !== tmp) {
    const debug = arg1(arg6[1]).debug;
    debug.warn("You appear to have multiple versions of the \"promise\" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
  }
  if (tmp2 !== arg1(arg6[6]).RN_GLOBAL_OBJ.Promise) {
    const debug3 = arg1(arg6[1]).debug;
    debug3.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
  } else {
    const debug2 = arg1(arg6[1]).debug;
    debug2.log("Unhandled promise rejections will be caught by Sentry.");
  }
};
