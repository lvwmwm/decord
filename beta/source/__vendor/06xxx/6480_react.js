// Module ID: 6480
// Function ID: 6481
// Name: react
// Dependencies: [19, 6319]
// Exports: useBottomSheetGestureHandlers

// Module 6480 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6319 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
