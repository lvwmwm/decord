// Module ID: 5408
// Function ID: 5409
// Name: useBottomSheetModal
// Dependencies: [19, 5409]
// Exports: useBottomSheetModal

// Module 5408 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5409) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
