// Module ID: 11053
// Function ID: 86072
// Name: useAgeSpecificText
// Dependencies: [0, 0]
// Exports: useAgeSpecificText

// Module 11053 (useAgeSpecificText)
import result from "result";

result = result.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(dependencyMap[0])()) {
    tmp = intl2;
  }
  return tmp;
};
