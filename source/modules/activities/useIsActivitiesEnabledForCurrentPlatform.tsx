// Module ID: 10530
// Function ID: 10531
// Name: useIsActivitiesEnabledForCurrentPlatform
// Dependencies: [4521, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10530 (useIsActivitiesEnabledForCurrentPlatform)
const result = require("set").fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !require(4521) /* isTablet */.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !require(4521) /* isTablet */.isTablet;
};
