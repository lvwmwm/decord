// Module ID: 4490
// Function ID: 39628
// Name: isSearchBarAvailableForCurrentPlatform
// Dependencies: [27]
// Exports: executeNativeBackPress, parseBooleanToOptionalBooleanNativeProp

// Module 4490 (isSearchBarAvailableForCurrentPlatform)
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
({ BackHandler: closure_0, Platform } = get_ActivityIndicator);
const items = ["ios", "android"];

export const isSearchBarAvailableForCurrentPlatform = items.includes("android");
export const isHeaderBarButtonsAvailableForCurrentPlatform = false;
export const executeNativeBackPress = function executeNativeBackPress() {
  closure_0.exitApp();
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
