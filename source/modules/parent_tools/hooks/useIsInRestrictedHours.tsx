// Module ID: 15843
// Function ID: 121094
// Name: useIsInRestrictedHours
// Dependencies: []
// Exports: default

// Module 15843 (useIsInRestrictedHours)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[2]).useStateFromStores(items, arg1(dependencyMap[3]).getCurrentRestrictedHoursState);
};
