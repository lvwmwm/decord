// Module ID: 5302
// Function ID: 45782
// Name: useBottomSheetGestureHandlers
// Dependencies: [31, 5201]
// Exports: useBottomSheetGestureHandlers

// Module 5302 (useBottomSheetGestureHandlers)
import { useContext } from "result";


export const useBottomSheetGestureHandlers = function useBottomSheetGestureHandlers() {
  const tmp = useContext(require(5201) /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
