// Module ID: 6479
// Function ID: 6480
// Name: react
// Dependencies: [19, 6318]
// Exports: useBottomSheetGestureHandlers

// Module 6479 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6318 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
