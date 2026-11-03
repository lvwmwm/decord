// Module ID: 5571
// Function ID: 5572
// Name: react
// Dependencies: [19, 5410]
// Exports: useBottomSheetGestureHandlers

// Module 5571 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5410 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
