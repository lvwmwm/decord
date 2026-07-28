// Module ID: 10901
// Function ID: 84538
// Name: useDefaultAppLauncherWidth
// Dependencies: [5222, 1450, 7992, 2]
// Exports: useDefaultAppLauncherWidth

// Module 10901 (useDefaultAppLauncherWidth)
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("AppLauncherEntrypoint").fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = importDefault(1450)().width;
  let bound = width;
  if (TEXT !== require(7992) /* AppLauncherEntrypoint */.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
