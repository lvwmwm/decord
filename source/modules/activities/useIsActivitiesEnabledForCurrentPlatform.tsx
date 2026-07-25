// Module ID: 10470
// Function ID: 81237
// Name: isActivitiesAllowed
// Dependencies: [4369, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10470 (isActivitiesAllowed)
function isActivitiesAllowed() {
  return !require(4369) /* isTablet */.isTablet;
}
const result = require("set").fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return isActivitiesAllowed();
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return isActivitiesAllowed();
};
