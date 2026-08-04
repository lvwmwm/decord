// Module ID: 5454
// Function ID: 5455
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5352]
// Exports: useBottomSheetGestureHandlers

// Module 5454 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(5352) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
