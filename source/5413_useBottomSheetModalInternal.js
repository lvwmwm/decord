// Module ID: 5413
// Function ID: 5414
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5409]
// Exports: useBottomSheetModalInternal

// Module 5413 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5409) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
