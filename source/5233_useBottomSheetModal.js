// Module ID: 5233
// Function ID: 45245
// Name: useBottomSheetModal
// Dependencies: [31, 5234]
// Exports: useBottomSheetModal

// Module 5233 (useBottomSheetModal)
import { useContext } from "result";


export const useBottomSheetModal = function useBottomSheetModal() {
  const tmp = useContext(require(5234) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
