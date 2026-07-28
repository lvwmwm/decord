// Module ID: 10509
// Function ID: 81363
// Name: isActivitiesAllowed
// Dependencies: [4403, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10509 (isActivitiesAllowed)
function isActivitiesAllowed() {
  return !require(4403) /* isTablet */.isTablet;
}
const result = require("set").fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return isActivitiesAllowed();
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return isActivitiesAllowed();
};
