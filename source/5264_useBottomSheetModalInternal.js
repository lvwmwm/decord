// Module ID: 5264
// Function ID: 5265
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5260]
// Exports: useBottomSheetModalInternal

// Module 5264 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5260) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
