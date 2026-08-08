// Module ID: 5407
// Function ID: 5408
// Name: useBottomSheetInternal
// Dependencies: [19, 5408]
// Exports: useBottomSheetInternal

// Module 5407 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5408) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
