// Module ID: 17715
// Function ID: 17716
// Name: useIsInRestrictedHours
// Dependencies: [1372, 7779, 504, 17716, 2]
// Exports: default

// Module 17715 (useIsInRestrictedHours)
import initialize from "initialize" /* 504 */;
import RestrictedHoursManager from "RestrictedHoursManager" /* 17716 */;
import UserStore from "UserStore" /* 1372 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7779 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [UserStore, FamilyCenterStore];
  return initialize.useStateFromStores(items, RestrictedHoursManager.getCurrentRestrictedHoursState);
};
