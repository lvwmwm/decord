// Module ID: 12490
// Function ID: 12491
// Name: useDefaultAppLauncherWidth
// Dependencies: [5504, 1493, 12489, 2]
// Exports: useDefaultAppLauncherWidth

// Module 12490 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5504 */;
import AppLauncherTypes from "AppLauncherTypes" /* 12489 */;
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
