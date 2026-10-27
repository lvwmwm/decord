// Module ID: 11247
// Function ID: 11248
// Name: useIsActivitiesEnabledForCurrentPlatform
// Dependencies: [5394, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 11247 (useIsActivitiesEnabledForCurrentPlatform)
import shared_PlatformUtils from "shared/PlatformUtils" /* 5394 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !shared_PlatformUtils.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !shared_PlatformUtils.isTablet;
};
