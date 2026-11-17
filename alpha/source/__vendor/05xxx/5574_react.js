// Module ID: 5574
// Function ID: 5575
// Name: react
// Dependencies: [19, 5575]
// Exports: useBottomSheetModal

// Module 5574 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5575 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
