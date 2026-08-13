// Module ID: 5447
// Function ID: 5448
// Name: useBottomSheetInternal
// Dependencies: [19, 5448]
// Exports: useBottomSheetInternal

// Module 5447 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5448) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
