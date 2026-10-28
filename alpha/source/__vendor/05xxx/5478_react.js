// Module ID: 5478
// Function ID: 5479
// Name: react
// Dependencies: [19, 5317]
// Exports: useBottomSheetGestureHandlers

// Module 5478 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5317 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
