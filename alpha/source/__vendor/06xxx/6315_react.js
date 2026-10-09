// Module ID: 6315
// Function ID: 6316
// Name: react
// Dependencies: [19, 6316]
// Exports: useBottomSheetModal

// Module 6315 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6316 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
