// Module ID: 5337
// Function ID: 45920
// Name: useBottomSheetGestureHandlers
// Dependencies: [31, 5235]
// Exports: useBottomSheetGestureHandlers

// Module 5337 (useBottomSheetGestureHandlers)
import { useContext } from "result";


export const useBottomSheetGestureHandlers = function useBottomSheetGestureHandlers() {
  const tmp = useContext(require(5235) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
