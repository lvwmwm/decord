// Module ID: 5253
// Function ID: 5254
// Name: useBottomSheetInternal
// Dependencies: [19, 5254]
// Exports: useBottomSheetInternal

// Module 5253 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5254) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
