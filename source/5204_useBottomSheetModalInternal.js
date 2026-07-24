// Module ID: 5204
// Function ID: 45130
// Name: useBottomSheetModalInternal
// Dependencies: [31, 5200]
// Exports: useBottomSheetModalInternal

// Module 5204 (useBottomSheetModalInternal)
import { useContext } from "result";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5200) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
