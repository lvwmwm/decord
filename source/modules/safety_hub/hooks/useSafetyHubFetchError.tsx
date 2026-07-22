// Module ID: 13540
// Function ID: 102706
// Name: useSafetyHubFetchError
// Dependencies: []
// Exports: useSafetyHubFetchError

// Module 13540 (useSafetyHubFetchError)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => fetchError.getFetchError());
};
