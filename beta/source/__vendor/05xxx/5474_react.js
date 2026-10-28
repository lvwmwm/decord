// Module ID: 5474
// Function ID: 5475
// Name: react
// Dependencies: [19, 5313]
// Exports: useBottomSheetGestureHandlers

// Module 5474 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5313 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
