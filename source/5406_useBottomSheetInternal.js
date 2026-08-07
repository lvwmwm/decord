// Module ID: 5406
// Function ID: 5407
// Name: useBottomSheetInternal
// Dependencies: [19, 5407]
// Exports: useBottomSheetInternal

// Module 5406 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5407) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
