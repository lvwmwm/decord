// Module ID: 5259
// Function ID: 5260
// Name: useBottomSheetModal
// Dependencies: [19, 5260]
// Exports: useBottomSheetModal

// Module 5259 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5260) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
