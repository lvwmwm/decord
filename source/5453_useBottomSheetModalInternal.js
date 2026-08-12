// Module ID: 5453
// Function ID: 5454
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5449]
// Exports: useBottomSheetModalInternal

// Module 5453 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5449) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
