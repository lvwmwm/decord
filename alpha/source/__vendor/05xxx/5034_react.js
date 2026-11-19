// Module ID: 5034
// Function ID: 5035
// Name: react
// Dependencies: [19, 5035]
// Exports: useBottomSheetModal

// Module 5034 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5035 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
