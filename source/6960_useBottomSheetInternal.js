// Module ID: 6960
// Function ID: 6961
// Name: useBottomSheetInternal
// Dependencies: [19, 6961]
// Exports: useBottomSheetInternal

// Module 6960 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(6961) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
