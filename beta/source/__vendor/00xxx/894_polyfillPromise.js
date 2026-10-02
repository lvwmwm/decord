// Module ID: 894
// Function ID: 895
// Name: polyfillPromise
// Dependencies: [874, 694, 895, 897, 898, 899, 693]
// Exports: checkPromiseAndWarn, polyfillPromise, requireRejectionTracking

// Module 894 (polyfillPromise)
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 693 */;
import _mod694 from "module_694" /* 694 */;
import ReactNativeLibraries from "ReactNativeLibraries" /* 874 */;
import _mod895 from "module_895" /* 895 */;
import _mod897 from "module_897" /* 897 */;

const require = globalThis.__r;

function getPromisePolyfill() {
  return require("module_898");
}

export const polyfillPromise = function polyfillPromise() {
  if (ReactNativeLibraries.ReactNativeLibraries.Utilities) {
    let closure_0 = tmp(898);
    _mod895;
    _mod897;
    const Utilities = tmp(874).ReactNativeLibraries.Utilities;
    Utilities.polyfillGlobal("Promise", () => closure_0);
  } else {
    const debug = tmp(694).debug;
    debug.warn("Could not polyfill Promise. React Native Libraries Utilities not found.");
  }
};
export { getPromisePolyfill };
export const requireRejectionTracking = function requireRejectionTracking() {
  return require("disable");
};
export const checkPromiseAndWarn = function checkPromiseAndWarn() {
  try {
    const _Promise = ReactNativeLibraries.ReactNativeLibraries.Promise;
    const tmp5 = require("module_898");
    const tmp7 = getPromisePolyfill();
    if (_Promise !== tmp5) {
      const debug = tmp2(694).debug;
      debug.warn("You appear to have multiple versions of the \"promise\" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    }
    if (tmp7 !== RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.Promise) {
      const debug3 = tmp2(694).debug;
      debug3.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    } else {
      const debug2 = tmp2(694).debug;
      debug2.log("Unhandled promise rejections will be caught by Sentry.");
    }
  } catch (err) {
    const debug4 = _mod694.debug;
    debug4.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
  }
};
