// Module ID: 11150
// Function ID: 11151
// Name: useIsActivitiesEnabledForCurrentPlatform
// Dependencies: [5354, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 11150 (useIsActivitiesEnabledForCurrentPlatform)
import shared_PlatformUtils from "shared/PlatformUtils" /* 5354 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !shared_PlatformUtils.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !shared_PlatformUtils.isTablet;
};
