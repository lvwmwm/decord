// Module ID: 7000
// Function ID: 7001
// Name: useBottomSheetModal
// Dependencies: [19, 7001]
// Exports: useBottomSheetModal

// Module 7000 (useBottomSheetModal)
import noop from "noop" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 7001 */;

const useContext = noop.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
