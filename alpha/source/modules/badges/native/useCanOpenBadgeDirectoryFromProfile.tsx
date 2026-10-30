// Module ID: 11417
// Function ID: 11418
// Name: useCanOpenBadgeDirectoryFromProfile
// Dependencies: [11416, 11418, 2]
// Exports: useCanOpenBadgeDirectoryFromProfile

// Module 11417 (useCanOpenBadgeDirectoryFromProfile)
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 11416 */;
import BadgeDirectoryUpdatesExperiment from "BadgeDirectoryUpdatesExperiment" /* 11418 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/useCanOpenBadgeDirectoryFromProfile.tsx");

export function useCanOpenBadgeDirectoryFromProfile(location) {
  const _location = location.location;
  const obj = BadgeManagementExperiment;
  let isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: _location });
  const obj2 = BadgeDirectoryUpdatesExperiment;
  if (isBadgeManagementEnabled) {
    isBadgeManagementEnabled = obj2.useIsBadgeDirectoryUpdatesEnabled({ location: _location });
  }
  return isBadgeManagementEnabled;
}
