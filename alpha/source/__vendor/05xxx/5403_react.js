// Module ID: 5403
// Function ID: 5404
// Name: react
// Dependencies: [19, 5242]
// Exports: useBottomSheetGestureHandlers

// Module 5403 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5242 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
