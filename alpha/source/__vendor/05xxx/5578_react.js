// Module ID: 5578
// Function ID: 5579
// Name: react
// Dependencies: [19, 5406]
// Exports: useBottomSheetGestureHandlers

// Module 5578 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5406 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
