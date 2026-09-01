// Module ID: 5797
// Function ID: 5798
// Name: useBottomSheetGestureHandlers
// Dependencies: [19, 5636]
// Exports: useBottomSheetGestureHandlers

// Module 5797 (useBottomSheetGestureHandlers)
import noop from "noop" /* 19 */;
import createContext from "createContext" /* 5636 */;

const useContext = noop.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(createContext.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
