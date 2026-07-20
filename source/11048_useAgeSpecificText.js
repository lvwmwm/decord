// Module ID: 11048
// Function ID: 86040
// Name: useAgeSpecificText
// Dependencies: []
// Exports: useAgeSpecificText

// Module 11048 (useAgeSpecificText)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(dependencyMap[0])()) {
    tmp = intl2;
  }
  return tmp;
};
