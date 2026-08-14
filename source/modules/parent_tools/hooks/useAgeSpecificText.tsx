// Module ID: 11394
// Function ID: 11395
// Name: useAgeSpecificText
// Dependencies: [7404, 2]
// Exports: useAgeSpecificText

// Module 11394 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7404)()) {
    tmp = intl2;
  }
  return tmp;
};
