// Module ID: 5468
// Function ID: 5469
// Name: useBottomSheetInternal
// Dependencies: [19, 5469]
// Exports: useBottomSheetInternal

// Module 5468 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5469) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
