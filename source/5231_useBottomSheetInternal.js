// Module ID: 5231
// Function ID: 45242
// Name: useBottomSheetInternal
// Dependencies: [31, 5232]
// Exports: useBottomSheetInternal

// Module 5231 (useBottomSheetInternal)
import { useContext } from "result";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5232) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
