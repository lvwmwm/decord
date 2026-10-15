// Module ID: 10857
// Function ID: 10858
// Name: useDefaultAppLauncherWidth
// Dependencies: [7062, 558, 1497, 10856, 2]

// Module 10857 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import ActionSheetConstants from "ActionSheetConstants" /* 7062 */;
import AppLauncherTypes from "AppLauncherTypes" /* 10856 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDefaultAppLauncherWidth(arg0) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (arg0 !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
}) : (function useDefaultAppLauncherWidth(arg0) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (arg0 !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = tmp2;
