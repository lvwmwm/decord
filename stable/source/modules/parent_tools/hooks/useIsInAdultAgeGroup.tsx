// Module ID: 8769
// Function ID: 8770
// Name: useIsInAdultAgeGroup
// Dependencies: [7640, 504, 2]
// Exports: default

// Module 8769 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7640 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [FamilyCenterStore];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
