// Module ID: 5572
// Function ID: 5573
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5411]
// Exports: useBottomSheetGestureHandlers

// Module 5572 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(5411) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
