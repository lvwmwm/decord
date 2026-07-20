// Module ID: 10868
// Function ID: 84537
// Name: useDefaultAppLauncherWidth
// Dependencies: []
// Exports: useDefaultAppLauncherWidth

// Module 10868 (useDefaultAppLauncherWidth)
const ACTION_SHEET_MAX_WIDTH = require(dependencyMap[0]).ACTION_SHEET_MAX_WIDTH;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = importDefault(dependencyMap[1])().width;
  let bound = width;
  if (TEXT !== require(dependencyMap[2]).AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
