// Module ID: 8985
// Function ID: 8986
// Name: getNativeComponent
// Dependencies: [17, 8986]
// Exports: getNativeComponent, getNativeModule

// Module 8985 (getNativeComponent)
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let c3;
let c4;
let c5;
({ NativeModules: c3, Platform, TurboModuleRegistry: c4, requireNativeComponent: c5 } = get_ActivityIndicator);

export const getNativeComponent = () => {
  try {
    return callback("RNDatePicker");
  } catch (err) {
    if (global.ignoreDatePickerWarning) {
      return null;
    } else {
      const _Error = Error;
      throw Error(require(8986) /* getInstallationErrorMessage */.getInstallationErrorMessage());
    }
  }
};
export const getNativeModule = () => {
  try {
    if (closure_4) {
      let RNDatePicker = closure_4.get("RNDatePicker");
    } else {
      RNDatePicker = RNDatePicker.RNDatePicker;
    }
    return RNDatePicker;
  } catch (err) {
    if (global.ignoreDatePickerWarning) {
      return null;
    } else {
      const _Error = Error;
      throw Error(require(8986) /* getInstallationErrorMessage */.getInstallationErrorMessage());
    }
  }
};
