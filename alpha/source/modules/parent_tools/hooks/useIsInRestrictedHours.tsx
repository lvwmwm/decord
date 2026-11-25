// Module ID: 19578
// Function ID: 19579
// Name: useIsInRestrictedHours
// Dependencies: [1386, 8170, 504, 2]
// Exports: default

// Module 19578 (useIsInRestrictedHours)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1386 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8170 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  let currentUserInRestrictedHours;
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};
