// Module ID: 5584
// Function ID: 5585
// Name: react
// Dependencies: [19, 5412]
// Exports: useBottomSheetGestureHandlers

// Module 5584 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5412 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
