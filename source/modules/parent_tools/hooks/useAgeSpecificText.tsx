// Module ID: 11327
// Function ID: 11328
// Name: useAgeSpecificText
// Dependencies: [7338, 2]
// Exports: useAgeSpecificText

// Module 11327 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7338)()) {
    tmp = intl2;
  }
  return tmp;
};
