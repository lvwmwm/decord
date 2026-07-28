// Module ID: 5238
// Function ID: 45251
// Name: useBottomSheetModalInternal
// Dependencies: [31, 5234]
// Exports: useBottomSheetModalInternal

// Module 5238 (useBottomSheetModalInternal)
import { useContext } from "result";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5234) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
