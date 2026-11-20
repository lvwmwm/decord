// Module ID: 12582
// Function ID: 12583
// Name: useDefaultAppLauncherWidth
// Dependencies: [5557, 1496, 12581, 2]
// Exports: useDefaultAppLauncherWidth

// Module 12582 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5557 */;
import AppLauncherTypes from "AppLauncherTypes" /* 12581 */;
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
