// Module ID: 5409
// Function ID: 5410
// Name: useBottomSheetModal
// Dependencies: [19, 5410]
// Exports: useBottomSheetModal

// Module 5409 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5410) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
