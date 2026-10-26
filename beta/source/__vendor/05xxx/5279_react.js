// Module ID: 5279
// Function ID: 5280
// Name: react
// Dependencies: [19, 5280]
// Exports: useBottomSheetModal

// Module 5279 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5280 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
