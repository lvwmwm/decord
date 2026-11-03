// Module ID: 5408
// Function ID: 5409
// Name: react
// Dependencies: [19, 5409]
// Exports: useBottomSheetModal

// Module 5408 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5409 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
