// Module ID: 5744
// Function ID: 5745
// Name: react
// Dependencies: [19, 5572]
// Exports: useBottomSheetGestureHandlers

// Module 5744 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5572 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
