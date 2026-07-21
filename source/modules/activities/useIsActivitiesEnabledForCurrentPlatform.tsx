// Module ID: 10506
// Function ID: 82042
// Name: isActivitiesAllowed
// Dependencies: []
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10506 (isActivitiesAllowed)
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
