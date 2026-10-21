// Module ID: 5261
// Function ID: 5262
// Name: react
// Dependencies: [19, 5262]
// Exports: useBottomSheetModal

// Module 5261 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5262 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
