// Module ID: 5576
// Function ID: 5577
// Name: react
// Dependencies: [19, 5404]
// Exports: useBottomSheetGestureHandlers

// Module 5576 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5404 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
