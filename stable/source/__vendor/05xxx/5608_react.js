// Module ID: 5608
// Function ID: 5609
// Name: react
// Dependencies: [19, 5436]
// Exports: useBottomSheetGestureHandlers

// Module 5608 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5436 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
