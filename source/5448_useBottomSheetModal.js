// Module ID: 5448
// Function ID: 5449
// Name: useBottomSheetModal
// Dependencies: [19, 5449]
// Exports: useBottomSheetModal

// Module 5448 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5449) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
