// Module ID: 5642
// Function ID: 5643
// Name: useBottomSheetModal
// Dependencies: [19, 5643]
// Exports: useBottomSheetModal

// Module 5642 (useBottomSheetModal)
import noop from "noop" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5643 */;

const useContext = noop.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
