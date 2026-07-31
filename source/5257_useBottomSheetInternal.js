// Module ID: 5257
// Function ID: 5258
// Name: useBottomSheetInternal
// Dependencies: [19, 5258]
// Exports: useBottomSheetInternal

// Module 5257 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5258) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
