// Module ID: 6211
// Function ID: 6212
// Name: react
// Dependencies: [19, 6050]
// Exports: useBottomSheetGestureHandlers

// Module 6211 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6050 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
