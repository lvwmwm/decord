// Module ID: 6704
// Function ID: 6705
// Name: react
// Dependencies: [19, 6543]
// Exports: useBottomSheetGestureHandlers

// Module 6704 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6543 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
