// Module ID: 5771
// Function ID: 5772
// Name: react-native
// Dependencies: [17]
// Exports: executeNativeBackPress, parseBooleanToOptionalBooleanNativeProp

// Module 5771 (react-native)
import react_native from "react-native" /* 17 */;

let Platform;
let _window;
({ BackHandler: _window, Platform } = react_native);
const items = ["ios", "android"];

export const isSearchBarAvailableForCurrentPlatform = items.includes("android");
export const isHeaderBarButtonsAvailableForCurrentPlatform = false;
export function executeNativeBackPress() {
  React.exitApp();
  return true;
}
export function parseBooleanToOptionalBooleanNativeProp(fullScreenSwipeEnabled) {
  if (undefined === fullScreenSwipeEnabled) {
    return "undefined";
  } else if (true === fullScreenSwipeEnabled) {
    return "true";
  } else if (false === fullScreenSwipeEnabled) {
    return "false";
  }
}
