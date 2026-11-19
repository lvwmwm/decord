// Module ID: 5208
// Function ID: 5209
// Name: react
// Dependencies: [19, 5036]
// Exports: useBottomSheetGestureHandlers

// Module 5208 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5036 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
