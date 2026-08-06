// Module ID: 5387
// Function ID: 5388
// Name: useBottomSheetInternal
// Dependencies: [19, 5388]
// Exports: useBottomSheetInternal

// Module 5387 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5388) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
