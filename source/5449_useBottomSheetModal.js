// Module ID: 5449
// Function ID: 5450
// Name: useBottomSheetModal
// Dependencies: [19, 5450]
// Exports: useBottomSheetModal

// Module 5449 (useBottomSheetModal)
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5450) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
