// Module ID: 5285
// Function ID: 5286
// Name: react
// Dependencies: [19, 5286]
// Exports: useBottomSheetModal

// Module 5285 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5286 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
