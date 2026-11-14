// Module ID: 20157
// Function ID: 20158
// Name: useIsInRestrictedHours
// Dependencies: [1388, 8740, 504, 2]
// Exports: default

// Module 20157 (useIsInRestrictedHours)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1388 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8740 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  let currentUserInRestrictedHours;
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};
