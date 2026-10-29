// Module ID: 8974
// Function ID: 8975
// Dependencies: [17, 8975]
// Exports: getNativeComponent, getNativeModule

// Module 8974
import _mod8975 from "module_8975" /* 8975 */;
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
      const obj = _mod8975;
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
      const obj2 = _mod8975;
      throw Error(obj2.getInstallationErrorMessage());
    }
  }
};
