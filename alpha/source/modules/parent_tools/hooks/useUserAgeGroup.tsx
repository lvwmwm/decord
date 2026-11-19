// Module ID: 16085
// Function ID: 16086
// Name: useUserAgeGroup
// Dependencies: [8216, 504, 2]
// Exports: default

// Module 16085 (useUserAgeGroup)
import get_initialized from "get initialized" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8216 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  let ageGroup;
  const items = [FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
