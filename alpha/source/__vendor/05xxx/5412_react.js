// Module ID: 5412
// Function ID: 5413
// Name: react
// Dependencies: [19, 5413]
// Exports: useBottomSheetModal

// Module 5412 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5413 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
