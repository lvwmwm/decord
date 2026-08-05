// Module ID: 5333
// Function ID: 5334
// Name: useBottomSheetInternal
// Dependencies: [19, 5334]
// Exports: useBottomSheetInternal

// Module 5333 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5334) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
