// Module ID: 4971
// Function ID: 42724
// Name: useBottomSheet
// Dependencies: []
// Exports: useBottomSheet

// Module 4971 (useBottomSheet)
const useContext = require(dependencyMap[0]).useContext;

export const useBottomSheet = function useBottomSheet() {
  const tmp = useContext(require(dependencyMap[1]).BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
