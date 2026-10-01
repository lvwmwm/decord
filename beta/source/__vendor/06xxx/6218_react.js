// Module ID: 6218
// Function ID: 6219
// Name: react
// Dependencies: [19, 6057]
// Exports: useBottomSheetGestureHandlers

// Module 6218 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6057 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
