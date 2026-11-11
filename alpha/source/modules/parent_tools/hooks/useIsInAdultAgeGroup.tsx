// Module ID: 9551
// Function ID: 9552
// Name: useIsInAdultAgeGroup
// Dependencies: [8673, 504, 2]
// Exports: default

// Module 9551 (useIsInAdultAgeGroup)
import get_initialized from "get initialized" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  let ageGroup;
  const items = [FamilyCenterStore];
  const obj = get_initialized;
  return "adult" === obj.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
