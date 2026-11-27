// Module ID: 19656
// Function ID: 19657
// Name: useIsInRestrictedHours
// Dependencies: [1387, 8213, 504, 2]
// Exports: default

// Module 19656 (useIsInRestrictedHours)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1387 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8213 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  let currentUserInRestrictedHours;
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};
