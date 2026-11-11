// Module ID: 20004
// Function ID: 20005
// Name: useIsInRestrictedHours
// Dependencies: [1385, 8673, 504, 2]
// Exports: default

// Module 20004 (useIsInRestrictedHours)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1385 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  let currentUserInRestrictedHours;
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};
