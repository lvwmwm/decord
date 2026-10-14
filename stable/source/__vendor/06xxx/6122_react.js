// Module ID: 6122
// Function ID: 6123
// Name: react
// Dependencies: [19, 6123]
// Exports: useBottomSheetModal

// Module 6122 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6123 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
