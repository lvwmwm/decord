// Module ID: 5744
// Function ID: 5745
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5583]
// Exports: useBottomSheetGestureHandlers

// Module 5744 (useBottomSheetGestureHandlers)
import noop from "noop" /* 19 */;
import createContext from "createContext" /* 5583 */;

const useContext = noop.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(createContext.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
