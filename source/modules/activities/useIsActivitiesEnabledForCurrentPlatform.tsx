// Module ID: 9502
// Function ID: 9503
// Name: useIsActivitiesEnabledForCurrentPlatform
// Dependencies: [4801, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 9502 (useIsActivitiesEnabledForCurrentPlatform)
import set from "set" /* 2 */;
import isTablet from "isTablet" /* 4801 */;

const result = set.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};
