// Module ID: 14208
// Function ID: 14209
// Name: useCanOpenBadgeDirectoryFromProfile
// Dependencies: [13957, 13955, 2]
// Exports: useCanOpenBadgeDirectoryFromProfile

// Module 14208 (useCanOpenBadgeDirectoryFromProfile)
import BadgeDirectoryUpdatesExperiment from "BadgeDirectoryUpdatesExperiment" /* 13955 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 13957 */;
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
