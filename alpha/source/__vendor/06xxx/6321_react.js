// Module ID: 6321
// Function ID: 6322
// Name: react
// Dependencies: [19, 6322]
// Exports: useBottomSheetModal

// Module 6321 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6322 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
