// Module ID: 9050
// Function ID: 9051
// Name: useDefaultAppLauncherWidth
// Dependencies: [5623, 1493, 8435, 2]
// Exports: useDefaultAppLauncherWidth

// Module 9050 (useDefaultAppLauncherWidth)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO" /* 5623 */;
import AppLauncherEntrypoint from "AppLauncherEntrypoint" /* 8435 */;

const ACTION_SHEET_MAX_WIDTH = ACTION_SHEET_START_HEIGHT_RATIO.ACTION_SHEET_MAX_WIDTH;
const result = set.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (TEXT !== AppLauncherEntrypoint.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
