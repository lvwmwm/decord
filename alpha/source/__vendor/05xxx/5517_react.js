// Module ID: 5517
// Function ID: 5518
// Name: react
// Dependencies: [19, 5518]
// Exports: useBottomSheetModal

// Module 5517 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5518 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
