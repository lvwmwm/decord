// Module ID: 5389
// Function ID: 5390
// Name: useBottomSheetModal
// Dependencies: [19, 5390]
// Exports: useBottomSheetModal

// Module 5389 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5390) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
