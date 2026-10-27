// Module ID: 11174
// Function ID: 11175
// Name: useDefaultAppLauncherWidth
// Dependencies: [5267, 558, 1496, 11173, 2]

// Module 11174 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5267 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11173 */;
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
