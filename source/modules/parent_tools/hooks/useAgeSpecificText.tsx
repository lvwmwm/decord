// Module ID: 11064
// Function ID: 86135
// Name: useAgeSpecificText
// Dependencies: [7124, 2]
// Exports: useAgeSpecificText

// Module 11064 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7124)()) {
    tmp = intl2;
  }
  return tmp;
};
