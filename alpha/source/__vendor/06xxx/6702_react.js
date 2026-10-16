// Module ID: 6702
// Function ID: 6703
// Name: react
// Dependencies: [19, 6541]
// Exports: useBottomSheetGestureHandlers

// Module 6702 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6541 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
