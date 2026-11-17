// Module ID: 5748
// Function ID: 5749
// Name: react
// Dependencies: [19, 5576]
// Exports: useBottomSheetGestureHandlers

// Module 5748 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5576 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
