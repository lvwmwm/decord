// Module ID: 6757
// Function ID: 6758
// Name: react
// Dependencies: [19, 6596]
// Exports: useBottomSheetGestureHandlers

// Module 6757 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6596 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
