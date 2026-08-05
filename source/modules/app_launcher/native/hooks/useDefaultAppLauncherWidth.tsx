// Module ID: 9439
// Function ID: 9440
// Name: useDefaultAppLauncherWidth
// Dependencies: [5324, 1474, 9438, 2]
// Exports: useDefaultAppLauncherWidth

// Module 9439 (useDefaultAppLauncherWidth)
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("AppLauncherEntrypoint").fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = importDefault(1474)().width;
  let bound = width;
  if (TEXT !== require(9438) /* AppLauncherEntrypoint */.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
