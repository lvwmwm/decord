// Module ID: 5363
// Function ID: 5364
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5261]
// Exports: useBottomSheetGestureHandlers

// Module 5363 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(5261) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
