// Module ID: 5335
// Function ID: 5336
// Name: useBottomSheetModal
// Dependencies: [19, 5336]
// Exports: useBottomSheetModal

// Module 5335 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5336) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
