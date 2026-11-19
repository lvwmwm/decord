// Module ID: 14117
// Function ID: 14118
// Name: useCanOpenBadgeDirectoryFromProfile
// Dependencies: [13866, 13864, 2]
// Exports: useCanOpenBadgeDirectoryFromProfile

// Module 14117 (useCanOpenBadgeDirectoryFromProfile)
import BadgeDirectoryUpdatesExperiment from "BadgeDirectoryUpdatesExperiment" /* 13864 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 13866 */;
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
