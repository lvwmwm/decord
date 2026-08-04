// Module ID: 5350
// Function ID: 5351
// Name: useBottomSheetModal
// Dependencies: [19, 5351]
// Exports: useBottomSheetModal

// Module 5350 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5351) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
