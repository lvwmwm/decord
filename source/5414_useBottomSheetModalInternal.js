// Module ID: 5414
// Function ID: 5415
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5410]
// Exports: useBottomSheetModalInternal

// Module 5414 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5410) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
