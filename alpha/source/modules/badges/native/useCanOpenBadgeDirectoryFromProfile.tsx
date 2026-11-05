// Module ID: 11650
// Function ID: 11651
// Name: useCanOpenBadgeDirectoryFromProfile
// Dependencies: [11649, 11651, 2]
// Exports: useCanOpenBadgeDirectoryFromProfile

// Module 11650 (useCanOpenBadgeDirectoryFromProfile)
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 11649 */;
import BadgeDirectoryUpdatesExperiment from "BadgeDirectoryUpdatesExperiment" /* 11651 */;
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
