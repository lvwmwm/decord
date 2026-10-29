// Module ID: 5316
// Function ID: 5317
// Name: react
// Dependencies: [19, 5317]
// Exports: useBottomSheetModal

// Module 5316 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5317 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
