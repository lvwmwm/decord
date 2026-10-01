// Module ID: 6055
// Function ID: 6056
// Name: react
// Dependencies: [19, 6056]
// Exports: useBottomSheetModal

// Module 6055 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6056 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
