// Module ID: 14219
// Function ID: 14220
// Name: useCanOpenBadgeDirectoryFromProfile
// Dependencies: [13961, 13959, 2]
// Exports: useCanOpenBadgeDirectoryFromProfile

// Module 14219 (useCanOpenBadgeDirectoryFromProfile)
import BadgeDirectoryUpdatesExperiment from "BadgeDirectoryUpdatesExperiment" /* 13959 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 13961 */;
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
