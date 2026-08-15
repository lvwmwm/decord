// Module ID: 6962
// Function ID: 6963
// Name: useBottomSheetModal
// Dependencies: [19, 6963]
// Exports: useBottomSheetModal

// Module 6962 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(6963) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
