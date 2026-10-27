// Module ID: 5280
// Function ID: 5281
// Name: react
// Dependencies: [19, 5281]
// Exports: useBottomSheetModal

// Module 5280 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5281 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
