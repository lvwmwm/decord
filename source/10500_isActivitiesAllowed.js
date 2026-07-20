// Module ID: 10500
// Function ID: 82008
// Name: isActivitiesAllowed
// Dependencies: []
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10500 (isActivitiesAllowed)
function isActivitiesAllowed() {
  return !require(dependencyMap[0]).isTablet;
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return isActivitiesAllowed();
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return isActivitiesAllowed();
};
