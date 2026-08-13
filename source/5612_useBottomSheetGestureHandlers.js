// Module ID: 5612
// Function ID: 5613
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5451]
// Exports: useBottomSheetGestureHandlers

// Module 5612 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(5451) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
