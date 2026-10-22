// Module ID: 8912
// Function ID: 8913
// Dependencies: [17, 8913]
// Exports: getNativeComponent, getNativeModule

// Module 8912
import _mod8913 from "module_8913" /* 8913 */;
import react_native from "react-native" /* 17 */;

let RNDatePicker;

let Platform;
let c3;
let closure_4;
let hasOwnProperty;
({ NativeModules: c3, Platform, TurboModuleRegistry: closure_4, requireNativeComponent: hasOwnProperty } = react_native);

export const getNativeComponent = () => {
  try {
    return hasOwnProperty("RNDatePicker");
  } catch (err) {
    if (global.ignoreDatePickerWarning) {
      return null;
    } else {
      const _Error = Error;
      const obj = _mod8913;
      throw Error(obj.getInstallationErrorMessage());
    }
  }
};
export const getNativeModule = () => {
  try {
    if (React3) {
      RNDatePicker = obj.get("RNDatePicker");
    } else {
      RNDatePicker = RNDatePicker.RNDatePicker;
    }
    return RNDatePicker;
  } catch (err) {
    if (global.ignoreDatePickerWarning) {
      return null;
    } else {
      const _Error = Error;
      const obj2 = _mod8913;
      throw Error(obj2.getInstallationErrorMessage());
    }
  }
};
