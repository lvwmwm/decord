// Module ID: 5454
// Function ID: 5455
// Name: useBottomSheetModalInternal
// Dependencies: [19, 5450]
// Exports: useBottomSheetModalInternal

// Module 5454 (useBottomSheetModalInternal)
import { useContext } from "noop";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(require(5450) /* BottomSheetContext */.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
