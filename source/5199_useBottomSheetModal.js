// Module ID: 5199
// Function ID: 45124
// Name: useBottomSheetModal
// Dependencies: [31, 5200]
// Exports: useBottomSheetModal

// Module 5199 (useBottomSheetModal)
import { useContext } from "result";


export const useBottomSheetModal = function useBottomSheetModal() {
  const tmp = useContext(require(5200) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
