// Module ID: 11506
// Function ID: 11507
// Name: useDefaultAppLauncherWidth
// Dependencies: [7430, 558, 1482, 9551, 2]

// Module 11506 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import ActionSheetConstants from "ActionSheetConstants" /* 7430 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9551 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (arg0 !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
}) : ((arg0) => {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (arg0 !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
});
