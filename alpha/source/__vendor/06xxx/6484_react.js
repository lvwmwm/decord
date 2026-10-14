// Module ID: 6484
// Function ID: 6485
// Name: react
// Dependencies: [19, 6323]
// Exports: useBottomSheetGestureHandlers

// Module 6484 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6323 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
