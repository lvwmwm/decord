// Module ID: 5691
// Function ID: 5692
// Name: react
// Dependencies: [19, 5519]
// Exports: useBottomSheetGestureHandlers

// Module 5691 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5519 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
