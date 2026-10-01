// Module ID: 17077
// Function ID: 17078
// Name: useIsInRestrictedHours
// Dependencies: [1372, 6957, 504, 17078, 2]
// Exports: default

// Module 17077 (useIsInRestrictedHours)
import get_initialized from "get initialized" /* 504 */;
import RestrictedHoursManager from "RestrictedHoursManager" /* 17078 */;
import UserStore from "UserStore" /* 1372 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, RestrictedHoursManager.getCurrentRestrictedHoursState);
};
