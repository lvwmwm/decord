// Module ID: 4477
// Function ID: 39544
// Name: isNativePlatformSupported
// Dependencies: []
// Exports: enableFreeze, enableScreens, freezeEnabled, screensEnabled

// Module 4477 (isNativePlatformSupported)
let Platform;
const _module = require(dependencyMap[0]);
({ Platform, UIManager: closure_0 } = _module);
let closure_1 = true;
let closure_2 = false;

export const isNativePlatformSupported = true;
export const enableScreens = function enableScreens() {
  const tmp = arguments.length > 0 && undefined !== arguments[0];
  let first = !tmp;
  if (tmp) {
    first = arguments[0];
  }
  let closure_1 = first;
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
  let closure_2 = first;
};
export function screensEnabled() {
  return closure_1;
}
export function freezeEnabled() {
  return closure_2;
}
