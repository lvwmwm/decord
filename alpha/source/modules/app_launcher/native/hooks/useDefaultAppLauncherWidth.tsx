// Module ID: 11700
// Function ID: 11701
// Name: useDefaultAppLauncherWidth
// Dependencies: [5399, 1493, 11699, 2]
// Exports: useDefaultAppLauncherWidth

// Module 11700 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5399 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11699 */;
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
