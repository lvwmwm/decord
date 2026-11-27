// Module ID: 12154
// Function ID: 12155
// Name: useDefaultAppLauncherWidth
// Dependencies: [5272, 1495, 10090, 2]
// Exports: useDefaultAppLauncherWidth

// Module 12154 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5272 */;
import AppLauncherTypes from "AppLauncherTypes" /* 10090 */;
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
