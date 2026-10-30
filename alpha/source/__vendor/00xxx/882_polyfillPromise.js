// Module ID: 882
// Function ID: 883
// Name: polyfillPromise
// Dependencies: [862, 681, 883, 176, 178, 884, 680]
// Exports: checkPromiseAndWarn, polyfillPromise, requireRejectionTracking

// Module 882 (polyfillPromise)
import _mod176 from "module_176" /* 176 */;
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 680 */;
import _mod681 from "module_681" /* 681 */;
import ReactNativeLibraries from "ReactNativeLibraries" /* 862 */;
import _mod883 from "module_883" /* 883 */;

const require = globalThis.__r;

function getPromisePolyfill() {
  return require("module_178");
}

export function polyfillPromise() {
  if (ReactNativeLibraries.ReactNativeLibraries.Utilities) {
    let closure_0 = tmp(178);
    _mod883;
    _mod176;
    const Utilities = tmp(862).ReactNativeLibraries.Utilities;
    Utilities.polyfillGlobal("Promise", () => closure_0);
  } else {
    const debug = tmp(681).debug;
    debug.warn("Could not polyfill Promise. React Native Libraries Utilities not found.");
  }
}
export { getPromisePolyfill };
export function requireRejectionTracking() {
  return require("disable");
}
export function checkPromiseAndWarn() {
  try {
    const _Promise = ReactNativeLibraries.ReactNativeLibraries.Promise;
    const tmp5 = require("module_178");
    const tmp7 = getPromisePolyfill();
    if (_Promise !== tmp5) {
      const debug = tmp2(681).debug;
      debug.warn("You appear to have multiple versions of the \"promise\" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    }
    if (tmp7 !== RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.Promise) {
      const debug3 = tmp2(681).debug;
      debug3.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    } else {
      const debug2 = tmp2(681).debug;
      debug2.log("Unhandled promise rejections will be caught by Sentry.");
    }
  } catch (err) {
    const debug4 = _mod681.debug;
    debug4.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
  }
}
