// Module ID: 6292
// Function ID: 6293
// Name: react
// Dependencies: [19, 6131]
// Exports: useBottomSheetGestureHandlers

// Module 6292 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6131 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
