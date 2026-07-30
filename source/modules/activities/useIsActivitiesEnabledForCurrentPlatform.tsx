// Module ID: 10529
// Function ID: 10530
// Name: useIsActivitiesEnabledForCurrentPlatform
// Dependencies: [4426, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10529 (useIsActivitiesEnabledForCurrentPlatform)
const result = require("set").fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !require(4426) /* isTablet */.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !require(4426) /* isTablet */.isTablet;
};
