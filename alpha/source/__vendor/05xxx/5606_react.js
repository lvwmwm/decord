// Module ID: 5606
// Function ID: 5607
// Name: react
// Dependencies: [19, 5434]
// Exports: useBottomSheetGestureHandlers

// Module 5606 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5434 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
