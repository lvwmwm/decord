// Module ID: 5359
// Function ID: 5360
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5257]
// Exports: useBottomSheetGestureHandlers

// Module 5359 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(5257) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
