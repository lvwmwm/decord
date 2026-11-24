// Module ID: 19466
// Function ID: 19467
// Name: useIsInRestrictedHours
// Dependencies: [1386, 8071, 504, 2]
// Exports: default

// Module 19466 (useIsInRestrictedHours)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1386 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8071 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  let currentUserInRestrictedHours;
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};
