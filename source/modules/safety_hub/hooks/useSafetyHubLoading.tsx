// Module ID: 13530
// Function ID: 102648
// Name: useIsSafetyHubLoading
// Dependencies: []
// Exports: default

// Module 13530 (useIsSafetyHubLoading)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => fetching.isFetching());
};
