// Module ID: 9550
// Function ID: 9551
// Name: useDefaultAppLauncherWidth
// Dependencies: [5398, 1474, 9549, 2]
// Exports: useDefaultAppLauncherWidth

// Module 9550 (useDefaultAppLauncherWidth)
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("AppLauncherEntrypoint").fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = importDefault(1474)().width;
  let bound = width;
  if (TEXT !== require(9549) /* AppLauncherEntrypoint */.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
