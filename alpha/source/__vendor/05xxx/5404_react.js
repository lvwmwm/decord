// Module ID: 5404
// Function ID: 5405
// Name: react
// Dependencies: [19, 5405]
// Exports: useBottomSheetModal

// Module 5404 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5405 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
