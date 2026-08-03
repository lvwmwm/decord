// Module ID: 5425
// Function ID: 5426
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5323]
// Exports: useBottomSheetGestureHandlers

// Module 5425 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(5323) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
