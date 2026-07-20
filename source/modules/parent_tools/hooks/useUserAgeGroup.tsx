// Module ID: 13643
// Function ID: 103392
// Name: useUserAgeGroup
// Dependencies: []
// Exports: default

// Module 13643 (useUserAgeGroup)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => ageGroup.getAgeGroup());
};
