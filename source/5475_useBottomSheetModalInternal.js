// Module ID: 5475
// Function ID: 5476
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5471]
// Exports: useBottomSheetModalInternal

// Module 5475 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5471) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
