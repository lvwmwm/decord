// Module ID: 5315
// Function ID: 5316
// Name: react
// Dependencies: [19, 5316]
// Exports: useBottomSheetModal

// Module 5315 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5316 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
