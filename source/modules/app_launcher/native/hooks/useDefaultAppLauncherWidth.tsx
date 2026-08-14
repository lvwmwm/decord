// Module ID: 9613
// Function ID: 9614
// Name: useDefaultAppLauncherWidth
// Dependencies: [5459, 1493, 9612, 2]
// Exports: useDefaultAppLauncherWidth

// Module 9613 (useDefaultAppLauncherWidth)
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("AppLauncherEntrypoint").fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = importDefault(1493)().width;
  let bound = width;
  if (TEXT !== require(9612) /* AppLauncherEntrypoint */.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
