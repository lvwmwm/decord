// Module ID: 10663
// Function ID: 10664
// Name: useIsActivitiesEnabledForCurrentPlatform
// Dependencies: [5848, 2]
// Exports: getIsActivitiesEnabledForCurrentPlatform, useIsActivitiesEnabledForCurrentPlatform

// Module 10663 (useIsActivitiesEnabledForCurrentPlatform)
import shared_PlatformUtils from "shared/PlatformUtils" /* 5848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export function useIsActivitiesEnabledForCurrentPlatform() {
  return !shared_PlatformUtils.isTablet;
}
export function getIsActivitiesEnabledForCurrentPlatform() {
  return !shared_PlatformUtils.isTablet;
}
