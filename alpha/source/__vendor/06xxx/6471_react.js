// Module ID: 6471
// Function ID: 6472
// Name: react
// Dependencies: [19, 6310]
// Exports: useBottomSheetGestureHandlers

// Module 6471 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6310 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
