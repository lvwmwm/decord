// Module ID: 5434
// Function ID: 5435
// Name: react
// Dependencies: [19, 5435]
// Exports: useBottomSheetModal

// Module 5434 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5435 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
