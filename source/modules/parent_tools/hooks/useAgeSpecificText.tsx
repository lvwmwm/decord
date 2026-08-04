// Module ID: 11239
// Function ID: 11240
// Name: useAgeSpecificText
// Dependencies: [7260, 2]
// Exports: useAgeSpecificText

// Module 11239 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7260)()) {
    tmp = intl2;
  }
  return tmp;
};
