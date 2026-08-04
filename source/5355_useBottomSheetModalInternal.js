// Module ID: 5355
// Function ID: 5356
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5351]
// Exports: useBottomSheetModalInternal

// Module 5355 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5351) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
