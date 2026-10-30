// Module ID: 16719
// Function ID: 16720
// Name: useUserAgeGroup
// Dependencies: [7708, 504, 2]
// Exports: default

// Module 16719 (useUserAgeGroup)
import get_initialized from "get initialized" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  let ageGroup;
  const items = [FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
