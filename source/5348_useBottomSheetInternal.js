// Module ID: 5348
// Function ID: 5349
// Name: useBottomSheetInternal
// Dependencies: [19, 5349]
// Exports: useBottomSheetInternal

// Module 5348 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5349) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
