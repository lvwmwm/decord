// Module ID: 5493
// Function ID: 5494
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5391]
// Exports: useBottomSheetGestureHandlers

// Module 5493 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(5391) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
