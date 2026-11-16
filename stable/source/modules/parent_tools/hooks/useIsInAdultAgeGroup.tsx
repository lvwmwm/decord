// Module ID: 8474
// Function ID: 8475
// Name: useIsInAdultAgeGroup
// Dependencies: [7824, 504, 2]
// Exports: default

// Module 8474 (useIsInAdultAgeGroup)
import get_initialized from "get initialized" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7824 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  let ageGroup;
  const items = [FamilyCenterStore];
  const obj = get_initialized;
  return "adult" === obj.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
