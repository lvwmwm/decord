// Module ID: 5442
// Function ID: 5443
// Name: react
// Dependencies: [19, 5281]
// Exports: useBottomSheetGestureHandlers

// Module 5442 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5281 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
