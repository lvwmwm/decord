// Module ID: 14216
// Function ID: 14217
// Name: useCanOpenBadgeDirectoryFromProfile
// Dependencies: [13958, 13956, 2]
// Exports: useCanOpenBadgeDirectoryFromProfile

// Module 14216 (useCanOpenBadgeDirectoryFromProfile)
import BadgeDirectoryUpdatesExperiment from "BadgeDirectoryUpdatesExperiment" /* 13956 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 13958 */;
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
