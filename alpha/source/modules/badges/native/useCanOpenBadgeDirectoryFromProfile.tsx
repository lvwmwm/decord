// Module ID: 11641
// Function ID: 11642
// Name: useCanOpenBadgeDirectoryFromProfile
// Dependencies: [11640, 11642, 2]
// Exports: useCanOpenBadgeDirectoryFromProfile

// Module 11641 (useCanOpenBadgeDirectoryFromProfile)
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 11640 */;
import BadgeDirectoryUpdatesExperiment from "BadgeDirectoryUpdatesExperiment" /* 11642 */;
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
