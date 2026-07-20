// Module ID: 4974
// Function ID: 42682
// Name: useBottomSheetModal
// Dependencies: []
// Exports: useBottomSheetModal

// Module 4974 (useBottomSheetModal)
const useContext = require(dependencyMap[0]).useContext;

export const useBottomSheetModal = function useBottomSheetModal() {
  const tmp = useContext(require(dependencyMap[1]).BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
