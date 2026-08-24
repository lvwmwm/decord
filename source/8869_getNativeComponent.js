// Module ID: 8869
// Function ID: 8870
// Name: getNativeComponent
// Dependencies: [17, 8870]
// Exports: getNativeComponent, getNativeModule

// Module 8869 (getNativeComponent)
import getInstallationErrorMessage from "getInstallationErrorMessage" /* 8870 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ NativeModules: c3, Platform, TurboModuleRegistry: c4, requireNativeComponent: c5 } = get_ActivityIndicator);

export const getNativeComponent = () => {
  try {
    return callback("RNDatePicker");
  } catch (err) {
    if (global.ignoreDatePickerWarning) {
      return null;
    } else {
      const _Error = Error;
      throw Error(getInstallationErrorMessage.getInstallationErrorMessage());
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
      throw Error(getInstallationErrorMessage.getInstallationErrorMessage());
    }
  }
};
