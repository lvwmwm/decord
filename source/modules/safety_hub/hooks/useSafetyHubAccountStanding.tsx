// Module ID: 11022
// Function ID: 85826
// Name: useSafetyHubAccountStanding
// Dependencies: []
// Exports: useSafetyHubAccountStanding

// Module 11022 (useSafetyHubAccountStanding)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => accountStanding.getAccountStanding());
};
