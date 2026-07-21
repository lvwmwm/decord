// Module ID: 5078
// Function ID: 43393
// Name: useBottomSheetGestureHandlers
// Dependencies: []
// Exports: useBottomSheetGestureHandlers

// Module 5078 (useBottomSheetGestureHandlers)
const useContext = require(dependencyMap[0]).useContext;

export const useBottomSheetGestureHandlers = function useBottomSheetGestureHandlers() {
  const tmp = useContext(require(dependencyMap[1]).BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
