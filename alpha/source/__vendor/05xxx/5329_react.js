// Module ID: 5329
// Function ID: 5330
// Name: react
// Dependencies: [19, 5157]
// Exports: useBottomSheetGestureHandlers

// Module 5329 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5157 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
