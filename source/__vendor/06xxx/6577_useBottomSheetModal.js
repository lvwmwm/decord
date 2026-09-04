// Module ID: 6577
// Function ID: 6578
// Name: useBottomSheetModal
// Dependencies: [19, 6578]
// Exports: useBottomSheetModal

// Module 6577 (useBottomSheetModal)
import noop from "noop" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6578 */;

const useContext = noop.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
