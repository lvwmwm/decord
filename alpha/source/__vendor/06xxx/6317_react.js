// Module ID: 6317
// Function ID: 6318
// Name: react
// Dependencies: [19, 6318]
// Exports: useBottomSheetModal

// Module 6317 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6318 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
