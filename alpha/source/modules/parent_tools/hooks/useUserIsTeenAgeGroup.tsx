// Module ID: 16212
// Function ID: 16213
// Name: useUserIsTeenAgeGroup
// Dependencies: [8335, 504, 2]
// Exports: default

// Module 16212 (useUserIsTeenAgeGroup)
import get_initialized from "get initialized" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8335 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  let ageGroup;
  const items = [FamilyCenterStore];
  const obj = get_initialized;
  return "teen" === obj.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
