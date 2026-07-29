// Module ID: 5260
// Function ID: 5261
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5256]
// Exports: useBottomSheetModalInternal

// Module 5260 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5256) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
