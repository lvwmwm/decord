// Module ID: 6541
// Function ID: 6542
// Name: react
// Dependencies: [19, 6542]
// Exports: useBottomSheetModal

// Module 6541 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6542 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
