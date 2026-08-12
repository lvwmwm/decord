// Module ID: 11386
// Function ID: 11387
// Name: useAgeSpecificText
// Dependencies: [7378, 2]
// Exports: useAgeSpecificText

// Module 11386 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7378)()) {
    tmp = intl2;
  }
  return tmp;
};
