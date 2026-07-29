// Module ID: 5255
// Function ID: 5256
// Name: useBottomSheetModal
// Dependencies: [19, 5256]
// Exports: useBottomSheetModal

// Module 5255 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5256) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
