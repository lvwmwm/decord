// Module ID: 6316
// Function ID: 6317
// Name: react
// Dependencies: [19, 6317]
// Exports: useBottomSheetModal

// Module 6316 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6317 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
