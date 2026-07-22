// Module ID: 10507
// Function ID: 82055
// Name: isActivitiesAllowed
// Dependencies: []
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10507 (isActivitiesAllowed)
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
