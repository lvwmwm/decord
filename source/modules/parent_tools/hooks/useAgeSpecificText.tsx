// Module ID: 11260
// Function ID: 11261
// Name: useAgeSpecificText
// Dependencies: [7278, 2]
// Exports: useAgeSpecificText

// Module 11260 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7278)()) {
    tmp = intl2;
  }
  return tmp;
};
