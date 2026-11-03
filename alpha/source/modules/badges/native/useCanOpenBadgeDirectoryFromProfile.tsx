// Module ID: 11591
// Function ID: 11592
// Name: useCanOpenBadgeDirectoryFromProfile
// Dependencies: [11590, 11592, 2]
// Exports: useCanOpenBadgeDirectoryFromProfile

// Module 11591 (useCanOpenBadgeDirectoryFromProfile)
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 11590 */;
import BadgeDirectoryUpdatesExperiment from "BadgeDirectoryUpdatesExperiment" /* 11592 */;
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
