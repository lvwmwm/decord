// Module ID: 17282
// Function ID: 17283
// Name: useUserAgeGroup
// Dependencies: [8673, 504, 2]
// Exports: default

// Module 17282 (useUserAgeGroup)
import get_initialized from "get initialized" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  let ageGroup;
  const items = [FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
