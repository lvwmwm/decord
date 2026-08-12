// Module ID: 5611
// Function ID: 5612
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5450]
// Exports: useBottomSheetGestureHandlers

// Module 5611 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(5450) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
