// Module ID: 4486
// Function ID: 39596
// Name: isSearchBarAvailableForCurrentPlatform
// Dependencies: []
// Exports: executeNativeBackPress, parseBooleanToOptionalBooleanNativeProp

// Module 4486 (isSearchBarAvailableForCurrentPlatform)
let Platform;
const _module = require(dependencyMap[0]);
({ BackHandler: closure_0, Platform } = _module);
const items = [];

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
