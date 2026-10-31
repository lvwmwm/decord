// Module ID: 5448
// Function ID: 5449
// Name: react
// Dependencies: [19, 5287]
// Exports: useBottomSheetGestureHandlers

// Module 5448 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5287 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
