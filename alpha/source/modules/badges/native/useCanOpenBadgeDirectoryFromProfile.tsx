// Module ID: 15362
// Function ID: 15363
// Name: useCanOpenBadgeDirectoryFromProfile
// Dependencies: [10012, 10010, 2]
// Exports: useCanOpenBadgeDirectoryFromProfile

// Module 15362 (useCanOpenBadgeDirectoryFromProfile)
import BadgeDirectoryUpdatesExperiment from "BadgeDirectoryUpdatesExperiment" /* 10010 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 10012 */;
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
