// Module ID: 6886
// Function ID: 6887
// Dependencies: [19, 6882]
// Exports: useBottomSheetModalInternal

// Module 6886
import _mod19 from "module_19" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6882 */;

const useContext = _mod19.useContext;

export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
