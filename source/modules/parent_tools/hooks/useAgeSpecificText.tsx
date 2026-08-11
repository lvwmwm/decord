// Module ID: 11332
// Function ID: 11333
// Name: useAgeSpecificText
// Dependencies: [7339, 2]
// Exports: useAgeSpecificText

// Module 11332 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7339)()) {
    tmp = intl2;
  }
  return tmp;
};
