// Module ID: 8389
// Function ID: 66777
// Name: getNativeComponent
// Dependencies: []
// Exports: getNativeComponent, getNativeModule

// Module 8389 (getNativeComponent)
let Platform;
const _module = require(dependencyMap[0]);
({ NativeModules: closure_3, Platform, TurboModuleRegistry: closure_4, requireNativeComponent: closure_5 } = _module);

export const getNativeComponent = function getNativeComponent() {
  return callback("RNDatePicker");
};
export const getNativeModule = function getNativeModule() {
  if (closure_4) {
    let RNDatePicker = closure_4.get("RNDatePicker");
  } else {
    RNDatePicker = RNDatePicker.RNDatePicker;
  }
  return RNDatePicker;
};
