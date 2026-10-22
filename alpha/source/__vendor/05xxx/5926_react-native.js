// Module ID: 5926
// Function ID: 5927
// Name: react-native
// Dependencies: [17]
// Exports: executeNativeBackPress, parseBooleanToOptionalBooleanNativeProp

// Module 5926 (react-native)
import react_native from "react-native" /* 17 */;

let Platform;
let _window;
({ BackHandler: _window, Platform } = react_native);
const items = ["ios", "android"];

export const isSearchBarAvailableForCurrentPlatform = items.includes("android");
export const isHeaderBarButtonsAvailableForCurrentPlatform = false;
export const executeNativeBackPress = function executeNativeBackPress() {
  React.exitApp();
  return true;
};
export function parseBooleanToOptionalBooleanNativeProp(fullScreenSwipeEnabled) {
  if (undefined === fullScreenSwipeEnabled) {
    return "undefined";
  } else if (true === fullScreenSwipeEnabled) {
    return "true";
  } else if (false === fullScreenSwipeEnabled) {
    return "false";
  }
}
