// Module ID: 5440
// Function ID: 5441
// Name: react
// Dependencies: [19, 5279]
// Exports: useBottomSheetGestureHandlers

// Module 5440 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5279 */;

const useContext = react.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(react2.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
