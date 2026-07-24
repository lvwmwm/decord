// Module ID: 4481
// Function ID: 39593
// Name: isNativePlatformSupported
// Dependencies: [27]
// Exports: enableFreeze, enableScreens, freezeEnabled, screensEnabled

// Module 4481 (isNativePlatformSupported)
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let closure_0;
({ Platform, UIManager: closure_0 } = get_ActivityIndicator);
let c1 = true;
let c2 = false;

export const isNativePlatformSupported = true;
export const enableScreens = function enableScreens() {
  const tmp = arguments.length > 0 && undefined !== arguments[0];
  let first = !tmp;
  if (tmp) {
    first = arguments[0];
  }
  if (first) {
    first = !viewManagerConfig.getViewManagerConfig("RNSScreen");
  }
  if (first) {
    const _console = console;
    console.error("Screen native module hasn't been linked. Please check the react-native-screens README for more details");
  }
};
export const enableFreeze = function enableFreeze() {
  const tmp = arguments.length > 0 && undefined !== arguments[0];
  let first = !tmp;
  if (tmp) {
    first = arguments[0];
  }
};
export function screensEnabled() {
  return c1;
}
export function freezeEnabled() {
  return c2;
}
