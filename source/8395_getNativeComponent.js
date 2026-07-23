// Module ID: 8395
// Function ID: 66814
// Name: getNativeComponent
// Dependencies: [27, 8396]
// Exports: getNativeComponent, getNativeModule

// Module 8395 (getNativeComponent)
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let closure_3;
let closure_4;
let closure_5;
({ NativeModules: closure_3, Platform, TurboModuleRegistry: closure_4, requireNativeComponent: closure_5 } = get_ActivityIndicator);

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
