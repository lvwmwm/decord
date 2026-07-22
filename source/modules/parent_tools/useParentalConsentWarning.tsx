// Module ID: 13655
// Function ID: 103439
// Name: useParentalConsentWarning
// Dependencies: []
// Exports: useParentalConsentWarning

// Module 13655 (useParentalConsentWarning)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => warning.getWarning());
};
