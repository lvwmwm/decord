// Module ID: 5512
// Function ID: 5513
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5410]
// Exports: useBottomSheetGestureHandlers

// Module 5512 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(5410) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
