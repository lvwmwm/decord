// Module ID: 4980
// Function ID: 42736
// Name: useBottomSheetModalInternal
// Dependencies: []
// Exports: useBottomSheetModalInternal

// Module 4980 (useBottomSheetModalInternal)
const useContext = require(dependencyMap[0]).useContext;

export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(dependencyMap[1]).BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
