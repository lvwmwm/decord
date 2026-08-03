// Module ID: 5326
// Function ID: 5327
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5322]
// Exports: useBottomSheetModalInternal

// Module 5326 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5322) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
