// Module ID: 5428
// Function ID: 5429
// Name: react
// Dependencies: [19, 5267]
// Exports: useBottomSheetGestureHandlers

// Module 5428 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5267 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
