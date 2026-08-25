// Module ID: 5515
// Function ID: 5516
// Name: useBottomSheetModal
// Dependencies: [19, 5516]
// Exports: useBottomSheetModal

// Module 5515 (useBottomSheetModal)
import noop from "noop" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5516 */;

const useContext = noop.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
