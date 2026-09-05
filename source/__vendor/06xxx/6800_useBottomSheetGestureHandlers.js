// Module ID: 6800
// Function ID: 6801
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 6639]
// Exports: useBottomSheetGestureHandlers

// Module 6800 (useBottomSheetGestureHandlers)
import noop from "noop" /* 19 */;
import createContext from "createContext" /* 6639 */;

const useContext = noop.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(createContext.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
