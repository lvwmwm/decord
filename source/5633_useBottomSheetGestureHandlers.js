// Module ID: 5633
// Function ID: 5634
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5472]
// Exports: useBottomSheetGestureHandlers

// Module 5633 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(5472) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
