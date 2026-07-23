// Module ID: 10885
// Function ID: 84633
// Name: useDefaultAppLauncherWidth
// Dependencies: [5188, 1450, 8182, 2]
// Exports: useDefaultAppLauncherWidth

// Module 10885 (useDefaultAppLauncherWidth)
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("AppLauncherEntrypoint").fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = importDefault(1450)().width;
  let bound = width;
  if (TEXT !== require(8182) /* AppLauncherEntrypoint */.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
