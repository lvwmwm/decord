// Module ID: 19475
// Function ID: 19476
// Name: useIsInRestrictedHours
// Dependencies: [1388, 8216, 504, 2]
// Exports: default

// Module 19475 (useIsInRestrictedHours)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1388 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8216 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  let currentUserInRestrictedHours;
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};
