// Module ID: 5192
// Function ID: 45094
// Name: useBottomSheet
// Dependencies: []
// Exports: useBottomSheet

// Module 5192 (useBottomSheet)
const useContext = require(dependencyMap[0]).useContext;

export const useBottomSheet = function useBottomSheet() {
  const tmp = useContext(require(dependencyMap[1]).BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
