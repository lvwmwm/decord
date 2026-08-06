// Module ID: 11245
// Function ID: 11246
// Name: useAgeSpecificText
// Dependencies: [7259, 2]
// Exports: useAgeSpecificText

// Module 11245 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7259)()) {
    tmp = intl2;
  }
  return tmp;
};
