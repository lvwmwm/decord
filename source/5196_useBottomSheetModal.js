// Module ID: 5196
// Function ID: 45100
// Name: useBottomSheetModal
// Dependencies: []
// Exports: useBottomSheetModal

// Module 5196 (useBottomSheetModal)
const useContext = require(dependencyMap[0]).useContext;

export const useBottomSheetModal = function useBottomSheetModal() {
  const tmp = useContext(require(dependencyMap[1]).BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
