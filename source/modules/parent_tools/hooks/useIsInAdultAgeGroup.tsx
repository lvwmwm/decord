// Module ID: 7119
// Function ID: 57230
// Name: useIsInAdultAgeGroup
// Dependencies: []
// Exports: default

// Module 7119 (useIsInAdultAgeGroup)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [closure_2];
  return "adult" === arg1(dependencyMap[1]).useStateFromStores(items, () => ageGroup.getAgeGroup());
};
