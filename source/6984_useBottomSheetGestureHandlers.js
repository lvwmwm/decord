// Module ID: 6984
// Function ID: 6985
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 6964]
// Exports: useBottomSheetGestureHandlers

// Module 6984 (useBottomSheetGestureHandlers)
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(require(6964) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
