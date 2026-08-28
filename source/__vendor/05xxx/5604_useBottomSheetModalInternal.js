// Module ID: 5604
// Function ID: 5605
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5600]
// Exports: useBottomSheetModalInternal

// Module 5604 (useBottomSheetModalInternal)
import noop from "noop" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5600 */;

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
