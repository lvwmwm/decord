// Module ID: 5443
// Function ID: 5444
// Name: react
// Dependencies: [19, 5282]
// Exports: useBottomSheetGestureHandlers

// Module 5443 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5282 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
