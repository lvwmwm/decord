// Module ID: 12096
// Function ID: 12097
// Name: useDefaultAppLauncherWidth
// Dependencies: [5241, 1494, 10047, 2]
// Exports: useDefaultAppLauncherWidth

// Module 12096 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5241 */;
import AppLauncherTypes from "AppLauncherTypes" /* 10047 */;
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
