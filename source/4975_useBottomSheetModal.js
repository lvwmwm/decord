// Module ID: 4975
// Function ID: 42730
// Name: useBottomSheetModal
// Dependencies: []
// Exports: useBottomSheetModal

// Module 4975 (useBottomSheetModal)
const useContext = require(dependencyMap[0]).useContext;

export const useBottomSheetModal = function useBottomSheetModal() {
  const tmp = useContext(require(dependencyMap[1]).BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
