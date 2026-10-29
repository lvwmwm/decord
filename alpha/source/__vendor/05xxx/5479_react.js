// Module ID: 5479
// Function ID: 5480
// Name: react
// Dependencies: [19, 5318]
// Exports: useBottomSheetGestureHandlers

// Module 5479 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5318 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
