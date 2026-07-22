// Module ID: 5194
// Function ID: 45097
// Name: useBottomSheetInternal
// Dependencies: []
// Exports: useBottomSheetInternal

// Module 5194 (useBottomSheetInternal)
const useContext = require(dependencyMap[0]).useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(dependencyMap[1]).BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
