// Module ID: 19660
// Function ID: 19661
// Name: useIsInRestrictedHours
// Dependencies: [1385, 7855, 504, 2]
// Exports: default

// Module 19660 (useIsInRestrictedHours)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1385 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7855 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  let currentUserInRestrictedHours;
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};
