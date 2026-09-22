// Module ID: 17727
// Function ID: 17728
// Name: useIsInRestrictedHours
// Dependencies: [1372, 7782, 504, 17728, 2]
// Exports: default

// Module 17727 (useIsInRestrictedHours)
import initialize from "initialize" /* 504 */;
import RestrictedHoursManager from "RestrictedHoursManager" /* 17728 */;
import UserStore from "UserStore" /* 1372 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7782 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [UserStore, FamilyCenterStore];
  return initialize.useStateFromStores(items, RestrictedHoursManager.getCurrentRestrictedHoursState);
};
