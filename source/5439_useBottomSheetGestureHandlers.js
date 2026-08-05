// Module ID: 5439
// Function ID: 5440
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5337]
// Exports: useBottomSheetGestureHandlers

// Module 5439 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(5337) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
