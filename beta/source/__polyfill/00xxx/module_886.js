// Module ID: 886
// Function ID: 887
// Dependencies: [866, 686, 887, 889, 890, 891, 685]
// Exports: checkPromiseAndWarn, polyfillPromise, requireRejectionTracking

// Module 886
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 685 */;
import _mod686 from "module_686" /* 686 */;
import TurboModuleRegistry from "TurboModuleRegistry" /* 866 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
function getPromisePolyfill() {
  return require("module_890");
}

export const polyfillPromise = function polyfillPromise() {
  if (TurboModuleRegistry.ReactNativeLibraries.Utilities) {
    closure_0 = tmp(890);
    tmp(887);
    tmp(889);
    const Utilities = tmp(866).ReactNativeLibraries.Utilities;
    Utilities.polyfillGlobal("Promise", () => closure_0);
  } else {
    const debug = tmp(686).debug;
    debug.warn("Could not polyfill Promise. React Native Libraries Utilities not found.");
  }
};
export { getPromisePolyfill };
export const requireRejectionTracking = function requireRejectionTracking() {
  return require("disable");
};
export const checkPromiseAndWarn = function checkPromiseAndWarn() {
  try {
    const tmp8 = getPromisePolyfill();
    if (TurboModuleRegistry.ReactNativeLibraries.Promise !== tmp6) {
      const debug = tmp3(686).debug;
      debug.warn("You appear to have multiple versions of the \"promise\" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    }
    if (tmp8 !== RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.Promise) {
      const debug3 = tmp3(686).debug;
      debug3.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    } else {
      const debug2 = tmp3(686).debug;
      debug2.log("Unhandled promise rejections will be caught by Sentry.");
    }
  } catch (err) {
    const debug4 = _mod686.debug;
    debug4.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
  }
};
