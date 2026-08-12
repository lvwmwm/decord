// Module ID: 9596
// Function ID: 9597
// Name: useDefaultAppLauncherWidth
// Dependencies: [5437, 1493, 9595, 2]
// Exports: useDefaultAppLauncherWidth

// Module 9596 (useDefaultAppLauncherWidth)
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("AppLauncherEntrypoint").fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = importDefault(1493)().width;
  let bound = width;
  if (TEXT !== require(9595) /* AppLauncherEntrypoint */.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
