// Module ID: 5424
// Function ID: 5425
// Name: react
// Dependencies: [19, 5263]
// Exports: useBottomSheetGestureHandlers

// Module 5424 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5263 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
