// Module ID: 5754
// Function ID: 5755
// Name: react
// Dependencies: [19, 5582]
// Exports: useBottomSheetGestureHandlers

// Module 5754 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5582 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
