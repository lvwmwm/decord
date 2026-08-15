// Module ID: 9567
// Function ID: 9568
// Name: useDefaultAppLauncherWidth
// Dependencies: [6951, 1494, 9566, 2]
// Exports: useDefaultAppLauncherWidth

// Module 9567 (useDefaultAppLauncherWidth)
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("AppLauncherEntrypoint").fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = importDefault(1494)().width;
  let bound = width;
  if (TEXT !== require(9566) /* AppLauncherEntrypoint */.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
