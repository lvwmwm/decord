// Module ID: 10723
// Function ID: 10724
// Name: useIsActivitiesEnabledForCurrentPlatform
// Dependencies: [4642, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10723 (useIsActivitiesEnabledForCurrentPlatform)
import set from "set" /* 2 */;
import isTablet from "isTablet" /* 4642 */;

const result = set.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};
