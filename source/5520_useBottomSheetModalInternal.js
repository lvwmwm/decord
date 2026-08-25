// Module ID: 5520
// Function ID: 5521
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5516]
// Exports: useBottomSheetModalInternal

// Module 5520 (useBottomSheetModalInternal)
import noop from "noop" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5516 */;

const useContext = noop.useContext;

export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
