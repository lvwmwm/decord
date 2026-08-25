// Module ID: 5678
// Function ID: 5679
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5517]
// Exports: useBottomSheetGestureHandlers

// Module 5678 (useBottomSheetGestureHandlers)
import noop from "noop" /* 19 */;
import createContext from "createContext" /* 5517 */;

const useContext = noop.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(createContext.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
