// Module ID: 10546
// Function ID: 82297
// Name: isActivitiesAllowed
// Dependencies: [4368, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10546 (isActivitiesAllowed)
function isActivitiesAllowed() {
  return !require(4368) /* isTablet */.isTablet;
}
const result = require("set").fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return isActivitiesAllowed();
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return isActivitiesAllowed();
};
