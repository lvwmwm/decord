// Module ID: 5765
// Function ID: 5766
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5604]
// Exports: useBottomSheetGestureHandlers

// Module 5765 (useBottomSheetGestureHandlers)
import noop from "noop" /* 19 */;
import createContext from "createContext" /* 5604 */;

const useContext = noop.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(createContext.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
