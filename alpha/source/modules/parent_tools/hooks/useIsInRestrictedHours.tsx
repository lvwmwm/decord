// Module ID: 19542
// Function ID: 19543
// Name: useIsInRestrictedHours
// Dependencies: [1385, 7839, 504, 2]
// Exports: default

// Module 19542 (useIsInRestrictedHours)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1385 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  let currentUserInRestrictedHours;
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};
