// Module ID: 5599
// Function ID: 5600
// Name: useBottomSheetModal
// Dependencies: [19, 5600]
// Exports: useBottomSheetModal

// Module 5599 (useBottomSheetModal)
import noop from "noop" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5600 */;

const useContext = noop.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
