// Module ID: 19320
// Function ID: 19321
// Name: useIsInRestrictedHours
// Dependencies: [1384, 7708, 504, 2]
// Exports: default

// Module 19320 (useIsInRestrictedHours)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1384 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  let currentUserInRestrictedHours;
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};
