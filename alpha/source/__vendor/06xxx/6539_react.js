// Module ID: 6539
// Function ID: 6540
// Name: react
// Dependencies: [19, 6540]
// Exports: useBottomSheetModal

// Module 6539 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6540 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
