// Module ID: 993
// Function ID: 10668
// Name: getPromisePolyfill
// Dependencies: [973, 794, 994, 996, 997, 998, 793]

// Module 993 (getPromisePolyfill)
const require = arg1;
const dependencyMap = arg6;
function getPromisePolyfill() {
  return require(997) /* valuePromise */;
}
arg5.polyfillPromise = function polyfillPromise() {
  if (_require(973).ReactNativeLibraries.Utilities) {
    _require = getPromisePolyfill();
    _require(994);
    _require(996);
    const Utilities = _require(973).ReactNativeLibraries.Utilities;
    Utilities.polyfillGlobal("Promise", () => closure_0);
  } else {
    const debug = _require(794).debug;
    debug.warn("Could not polyfill Promise. React Native Libraries Utilities not found.");
  }
};
arg5.getPromisePolyfill = getPromisePolyfill;
arg5.requireRejectionTracking = function requireRejectionTracking() {
  return require(998) /* disable */;
};
arg5.checkPromiseAndWarn = function checkPromiseAndWarn() {
  const tmp = require(997) /* valuePromise */;
  if (require(973) /* reactNativeVersion */.ReactNativeLibraries.Promise !== tmp) {
    const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
    debug.warn("You appear to have multiple versions of the \"promise\" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
  }
  if (tmp2 !== require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.Promise) {
    const debug3 = require(794) /* registerSpanErrorInstrumentation */.debug;
    debug3.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
  } else {
    const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
    debug2.log("Unhandled promise rejections will be caught by Sentry.");
  }
};
