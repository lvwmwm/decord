// Module ID: 5340
// Function ID: 5341
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5336]
// Exports: useBottomSheetModalInternal

// Module 5340 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5336) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
