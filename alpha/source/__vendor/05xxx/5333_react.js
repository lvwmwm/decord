// Module ID: 5333
// Function ID: 5334
// Name: react
// Dependencies: [19, 5161]
// Exports: useBottomSheetGestureHandlers

// Module 5333 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5161 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
