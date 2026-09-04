// Module ID: 6740
// Function ID: 6741
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 6579]
// Exports: useBottomSheetGestureHandlers

// Module 6740 (useBottomSheetGestureHandlers)
import noop from "noop" /* 19 */;
import createContext from "createContext" /* 6579 */;

const useContext = noop.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(createContext.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
