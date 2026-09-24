// Module ID: 11568
// Function ID: 11569
// Name: useDefaultAppLauncherWidth
// Dependencies: [7484, 1478, 9606, 2]
// Exports: useDefaultAppLauncherWidth

// Module 11568 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import ActionSheetConstants from "ActionSheetConstants" /* 7484 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9606 */;
import size from "module_2" /* 2 */;

const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (TEXT !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
