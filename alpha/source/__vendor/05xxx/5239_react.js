// Module ID: 5239
// Function ID: 5240
// Name: react
// Dependencies: [19, 5067]
// Exports: useBottomSheetGestureHandlers

// Module 5239 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5067 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
