// Module ID: 9012
// Function ID: 9013
// Name: useIsActivitiesEnabledForCurrentPlatform
// Dependencies: [5321, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 9012 (useIsActivitiesEnabledForCurrentPlatform)
import shared_PlatformUtils from "shared/PlatformUtils" /* 5321 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !shared_PlatformUtils.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !shared_PlatformUtils.isTablet;
};
