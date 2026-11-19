// Module ID: 12045
// Function ID: 12046
// Name: useDefaultAppLauncherWidth
// Dependencies: [5021, 1496, 10614, 2]
// Exports: useDefaultAppLauncherWidth

// Module 12045 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5021 */;
import AppLauncherTypes from "AppLauncherTypes" /* 10614 */;
import size from "module_2" /* 2 */;

const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export function useDefaultAppLauncherWidth(TEXT) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (TEXT !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
}
