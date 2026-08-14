// Module ID: 10628
// Function ID: 10629
// Name: useIsActivitiesEnabledForCurrentPlatform
// Dependencies: [4603, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10628 (useIsActivitiesEnabledForCurrentPlatform)
const result = require("set").fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !require(4603) /* isTablet */.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !require(4603) /* isTablet */.isTablet;
};
