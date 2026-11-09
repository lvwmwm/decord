// Module ID: 5402
// Function ID: 5403
// Name: react
// Dependencies: [19, 5403]
// Exports: useBottomSheetModal

// Module 5402 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5403 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
