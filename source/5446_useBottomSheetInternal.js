// Module ID: 5446
// Function ID: 5447
// Name: useBottomSheetInternal
// Dependencies: [19, 5447]
// Exports: useBottomSheetInternal

// Module 5446 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5447) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
