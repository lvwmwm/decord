// Module ID: 6700
// Function ID: 6701
// Name: react
// Dependencies: [19, 6539]
// Exports: useBottomSheetGestureHandlers

// Module 6700 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6539 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
