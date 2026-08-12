// Module ID: 10696
// Function ID: 10697
// Name: useIsActivitiesEnabledForCurrentPlatform
// Dependencies: [4580, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10696 (useIsActivitiesEnabledForCurrentPlatform)
const result = require("set").fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !require(4580) /* isTablet */.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !require(4580) /* isTablet */.isTablet;
};
