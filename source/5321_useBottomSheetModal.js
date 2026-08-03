// Module ID: 5321
// Function ID: 5322
// Name: useBottomSheetModal
// Dependencies: [19, 5322]
// Exports: useBottomSheetModal

// Module 5321 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5322) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
