// Module ID: 5265
// Function ID: 5266
// Name: react
// Dependencies: [19, 5266]
// Exports: useBottomSheetModal

// Module 5265 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5266 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
