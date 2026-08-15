// Module ID: 6967
// Function ID: 6968
// Name: useBottomSheetModalInternal
// Dependencies: [19, 6963]
// Exports: useBottomSheetModalInternal

// Module 6967 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(6963) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
