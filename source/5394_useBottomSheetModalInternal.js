// Module ID: 5394
// Function ID: 5395
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5390]
// Exports: useBottomSheetModalInternal

// Module 5394 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5390) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
