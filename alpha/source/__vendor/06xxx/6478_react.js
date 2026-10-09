// Module ID: 6478
// Function ID: 6479
// Name: react
// Dependencies: [19, 6317]
// Exports: useBottomSheetGestureHandlers

// Module 6478 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6317 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
