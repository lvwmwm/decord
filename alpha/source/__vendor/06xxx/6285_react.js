// Module ID: 6285
// Function ID: 6286
// Name: react
// Dependencies: [19, 6124]
// Exports: useBottomSheetGestureHandlers

// Module 6285 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6124 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
