// Module ID: 5311
// Function ID: 5312
// Name: react
// Dependencies: [19, 5312]
// Exports: useBottomSheetModal

// Module 5311 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5312 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
