// Module ID: 4482
// Function ID: 39532
// Name: isSearchBarAvailableForCurrentPlatform
// Dependencies: []
// Exports: executeNativeBackPress, parseBooleanToOptionalBooleanNativeProp

// Module 4482 (isSearchBarAvailableForCurrentPlatform)
let Platform;
const _module = require(dependencyMap[0]);
({ BackHandler: closure_0, Platform } = _module);
const items = [20, 40];

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
