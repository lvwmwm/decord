// Module ID: 893
// Function ID: 894
// Name: polyfillPromise
// Dependencies: [873, 693, 894, 896, 897, 898, 692]
// Exports: checkPromiseAndWarn, polyfillPromise, requireRejectionTracking

// Module 893 (polyfillPromise)
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 692 */;
import _mod693 from "module_693" /* 693 */;
import ReactNativeLibraries from "ReactNativeLibraries" /* 873 */;
import _mod894 from "module_894" /* 894 */;
import _mod896 from "module_896" /* 896 */;

const require = globalThis.__r;

function getPromisePolyfill() {
  return require("module_897");
}

export const polyfillPromise = function polyfillPromise() {
  if (ReactNativeLibraries.ReactNativeLibraries.Utilities) {
    let closure_0 = tmp(897);
    _mod894;
    _mod896;
    const Utilities = tmp(873).ReactNativeLibraries.Utilities;
    Utilities.polyfillGlobal("Promise", () => closure_0);
  } else {
    const debug = tmp(693).debug;
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
    const tmp5 = require("module_897");
    const tmp7 = getPromisePolyfill();
    if (_Promise !== tmp5) {
      const debug = tmp2(693).debug;
      debug.warn("You appear to have multiple versions of the \"promise\" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    }
    if (tmp7 !== RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.Promise) {
      const debug3 = tmp2(693).debug;
      debug3.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    } else {
      const debug2 = tmp2(693).debug;
      debug2.log("Unhandled promise rejections will be caught by Sentry.");
    }
  } catch (err) {
    const debug4 = _mod693.debug;
    debug4.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
  }
};
