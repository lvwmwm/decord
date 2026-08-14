// Module ID: 5470
// Function ID: 5471
// Name: useBottomSheetModal
// Dependencies: [19, 5471]
// Exports: useBottomSheetModal

// Module 5470 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5471) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
